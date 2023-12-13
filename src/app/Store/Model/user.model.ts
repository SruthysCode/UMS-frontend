import { EntityState } from '@ngrx/entity';

export interface Users{
    username : string,
    password : string,
    name : string,
    email : string,
    mobile : string,
    gender : string,
    status : boolean,
}

export interface Usercred{
    username : string,
    password : string
}

export interface Userinfo{
        username: string;
        email:string;
        name : string,
        mobile : string,
        image: string,
        // gender:string,
        // password:string,
        // status:boolean,
        // __v:number,
        // _id:string,
       
    }
    

 export interface UserModel extends EntityState<Users>{
    
    userinfo: Userinfo
 }
