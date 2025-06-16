export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    status?: boolean;
    description?: string;
    rating?: number;
    tags?: string[];
}