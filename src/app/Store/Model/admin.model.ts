import { EntityState } from "@ngrx/entity";


export interface Admin{
    username : string,
    password : string    
    }

export interface Adminname{
    username  : string,
}

export interface Search{
    search : string;
}
 export interface AdminModel extends EntityState<Admin>{}    