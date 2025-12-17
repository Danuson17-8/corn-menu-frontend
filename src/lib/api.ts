interface IAPIResponseBase {
    httpStatus: number;
    headers: Record<string, string>;
    message: string;
}

export type IAPIResponse<D> = IAPIResponseBase &
    (
        | {
            success: true;
            data: D;
        }
        | {
            success: false;
            data: null;
        }
    );

export class APIError extends Error {
    httpStatus: number;
    headers: Record<string, string>;
    reason: string;

    constructor(data: IAPIResponse<null>) {
        super(`[HTTP API] Error! "${data.message}"`);

        this.httpStatus = data.httpStatus;
        this.headers = data.headers;
        this.reason = data.message;
    }
}

export async function requestAPI<D extends {}>(options: {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    url: string;
    baseURL?: string;
    body?: unknown;
    query?: Record<string, any>;
    headers?: Record<string, string>;
    disableToken?: boolean;
    // If HTTP status 400 - 599. Will be throw error
    throwHTTPError?: boolean;
}): Promise<IAPIResponse<D>> {
    let body: any = null;
    // const token = getToken();

    // Headers
    const headers: HeadersInit = {
        ...options.headers,
    };

    // if (!options.disableToken) {
    //     headers['Authorization'] = token ? `Bearer ${token}` : '';
    // }

    if (options.body instanceof FormData) {
        body = options.body;
    } else if (options.body instanceof Object) {
        body = JSON.stringify(options.body);
        headers['content-type'] = 'application/json';
    }

    try {
        const controller = new AbortController();
        const signal = controller.signal;

        const timeoutId = setTimeout(() => controller.abort(), 12_000); // 12 Seconds
        const resp = await fetch(
            `${options.baseURL ?? import.meta.env.VITE_API_URL}${options.url}${options.query ? `?${new URLSearchParams(options.query).toString()}` : ''}`,
            {
                method: options.method,
                body: !['GET', 'DELETE'].includes(options.method)
                    ? body || ''
                    : undefined,
                credentials: !options.disableToken ? 'include' : undefined,
                headers: headers,
                signal
            }
        );
        //console.log(`${options.baseURL ?? import.meta.env.VITE_API_URL}${options.url}`);

        clearTimeout(timeoutId);

        const js = await resp.json();
        const errorData: IAPIResponse<D> = {
            httpStatus: resp.status,
            success: resp.ok,
            headers: Object.fromEntries(resp.headers ?? {}),
            message:
                js.message ?? (resp.ok ? 'Success' : 'Internal server error'),
            data: js,
        };

        if (!errorData.success && options.throwHTTPError)
            throw new APIError(errorData);

        return errorData;
    } catch (e) {
        console.error(e);
        if (options.throwHTTPError) {
            if (e instanceof APIError) throw e;
            throw e;
        }

        const errorData: IAPIResponse<D> = {
            httpStatus: 0,
            headers: {},
            success: false,
            message: 'Connection timeout. Please try again later',
            data: null,
        };
        return errorData;
    }
}
