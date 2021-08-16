import MenuModel from "../menu/MenuModel";

interface OrderModel {
    receiverName: string
    phoneNumber: string
    address: string
    paymentMethod: string
    deliveryType: string
    date: string
    time: string
    menu: MenuModel[]
    status: string
}

export default OrderModel