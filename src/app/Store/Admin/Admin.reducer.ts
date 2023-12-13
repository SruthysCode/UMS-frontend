import { createReducer, on } from "@ngrx/store";
import { AdminState } from "./Admin.state";
import { Users } from "../Model/user.model";
import { UserAdapter, UserState } from "../User/User.state";
import { getuserssuccess } from "./Admin.action";

const _adminreducer= createReducer(AdminState,
  on(getuserssuccess, (state: any, action: { userlist: any; }) => {
    return UserAdapter.setAll(action.userlist, state)
}
  ))

export function AdminReducer(state: any, action: any){
  return _adminreducer(state, action)
}


// export interface UserState {
//     user: Users | null;
//   }
//   export const getinitialState: UserState = {
//     user: null,
//   };
//    export const _userReducerget = createReducer(UserState,
//     on(getuserssuccess, (state: any, action: { userlist: any; }) => {
//       return UserAdapter.setAll(action.userlist, state)
  // }) 
  // )