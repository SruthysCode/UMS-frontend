import { createEntityAdapter } from "@ngrx/entity";
import { Admin, AdminModel } from "../Model/admin.model";

export const AdminAdapter= createEntityAdapter<Admin>();

export const AdminState : AdminModel= AdminAdapter.getInitialState({
    admininfo:{
        username: '',
        email: '',
        name: '',
    }
});
