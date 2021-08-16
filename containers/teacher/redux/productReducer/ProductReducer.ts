import ProductActionType from "./ProductActionType";

interface ProductActionType {
    type: string
    data: any
}

const initialState = {
    products: []
}

const productReducer = function (state = initialState, action: ProductActionType) {
    switch (action.type) {
        case ProductActionType.SET_PRODUCTS:
            return {
                ...state,
                products: action.data
            };
        default:
            return state;
    }
};

export type ProductState = typeof initialState
export default productReducer