export interface Vehicle {
    id:number;
    name:string;
    price:number;
    active:boolean;
    service_due_date:Date;
    type:string;
    imageUrl:string;
    insurance_expiry_date:Date;
    last_serviced_date:Date;
    number:string;
    branch:string;
    status?:boolean;

}