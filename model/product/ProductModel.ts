interface ProductModel {
    id?: number
    name: string
    description: string
    quantity: number
    sold?: number
    price: number
    discount: number
    category: string
    created_at?: Date
    updated_at?: Date
}

export default ProductModel