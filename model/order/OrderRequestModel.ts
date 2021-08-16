import OrderMenuRequestModel from "../menu/OrderMenuRequestModel";

interface OrderRequestModel {
    id?: number
    receiverName: string
    phoneNumber: string
    address: string
    paymentMethod: string
    deliveryType: string
    date: string
    time: string
    menu: OrderMenuRequestModel[]
    status: string
}

export default OrderRequestModel