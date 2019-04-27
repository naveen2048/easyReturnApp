export interface IOrderModel{
    title:string;
    description:string;
    image:any;
    quantity:number;
    reasonforreturn:string;
    returnquantity:number;
    notes:string;
    product_id:any;
}

export interface IReturnModel {
    returnMethod:string;
    notes:string;
    notificationEmail:string;
    orderitems: IOrderModel[];
    bankName:string;
    ifscCode:string;
    accountName:string;
    bankBranch:string;
}

export interface IOrderRequestModel{
    shop:string;
    order_number:any;
    token:any;
    email:string;
}