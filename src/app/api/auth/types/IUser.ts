import { User } from "next-auth";
export interface IUser extends User{
    tokenJWT: unknown;
    token: IUser;
    id:string ,
    name:string,
    email:string,
    password:string
    phone:string,
}