import { createEntityAdapter } from "@ngrx/entity";
import { UserModel, Users } from "../Model/user.model";

export const UserAdapter = createEntityAdapter<Users>();

export const UserState: UserModel = UserAdapter.getInitialState({
        userinfo:{
        // id:0,
        username: '',
        email: '',
        name: '',
        mobile:'',
        // role: '',
        image:'',
        // status: false,
    }
});