import { useLocation } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';

export default function InternalErrorScreen({ error, id }: { error: Error|null, id?: string }) {
    const location = useLocation();
    return (
        <div className="flex justify-center h-screen">
            <Card className="max-w-lg my-auto">
                <CardContent className="text-center p-5">
                    <p>Corn Corn</p>
                    <span>ERROR</span>
                    <div className="text-left">
                        <hr className="my-4" />
                        <p>Timestamp: {Date.now()}</p>
                        {id && <p>Error ID: {id}</p>}
                        {import.meta.env.DEV && <>
                            <p>Path: {location.pathname}</p>
                            <p>Hash: {location.hash || '-'}</p>
                            <p>เหตุผล:</p>
                            <div className="bg-gray-200 my-2 p-4 rounded-xl">
                                <p>{error?.message}</p>
                            </div>
                        </>}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
