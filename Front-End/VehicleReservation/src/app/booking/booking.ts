import { User } from '../site/user';
import { Vehicle } from '../vehicle/vehicle';

export interface Booking {
    id?:number;
    bookingStart:Date;
    bookingEnd:Date;
    price?:number;
    paid:boolean;
    user?:User;
    vehicle?:Vehicle;
}