import type { ITranslate } from "./translate";

export interface CornMenu {
    id: string;
    name: ITranslate;
    price: number;
    image: string;
    stock: number;
    description?: string;
}