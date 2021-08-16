interface ProductDetailModel {
    id: number
    created_at: Date,
    updated_at: Date,
    name: string,
    description: string
    quantity: number
    price: number
    discount: number
    category: string
    sold: number
    images: [
        {
            id: number
            idProduct: number
            image: string
        }
    ]
}

export default ProductDetailModel