export interface IOrderModel{
    title:string;
    description:string;
    image:any;
    quantity:number;
    reasonforreturn:string;
    returnquantity:number;
    notes:string;
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