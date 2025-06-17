export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    category: ProductCategory;
    status?: boolean;
    description?: string;
    rating?: number;
    tags?: string[];
}

export type ProductCategory = 'cncrouter' | 'wallPanel' | 'wood' | 'laser';
