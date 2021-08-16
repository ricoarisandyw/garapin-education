interface ProductImageModel {
    id?: number
    idProduct: number
    image: string
}

export function findDeletedImage(oldImages: ProductImageModel[], newImages: ProductImageModel[]) {
    const newImagesList = newImages.map((img) => img.image)
    return oldImages.filter((image) => {
        !newImagesList.includes(image.image)
    })
}

export function findNewImage(oldImages: ProductImageModel[], newImages: ProductImageModel[]) {
    const oldImageList = oldImages.map((img) => img.image)
    return newImages.filter((image) => {
        !oldImageList.includes(image.image)
    })
}

export default ProductImageModel