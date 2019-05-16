export interface IOrderModel{
    title:string;
    description:string;
    image:any;
    quantity:number;
    reasonforreturn:string;
    returnquantity:number;
    notes:string;
    product_id:any;
    returnMethod:string;
}

export interface IReturnModel {
    orderNumber:string;
    notes:string;
    notificationEmail:string;
    orderitems: IOrderModel[];
    bankName:string;
    ifscCode:string;
    accountName:string;
    bankBranch:string;
    accountNumber:string;
}

export interface IOrderRequestModel{
    shop:string;
    order_number:any;
    token:any;
    email:string;
}
