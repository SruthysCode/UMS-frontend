// import { createFeatureSelector } from "@ngrx/store";
// import { Users } from "../Model/user.model";
// import { UserAdapter } from "../User/User.state";

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../User/User.state'; // Assuming UsersState is your feature state
import { UserAdapter } from '../User/User.state'; // Import your UserAdapter
import { UserModel, Users } from '../Model/user.model';


 const getUserState = createFeatureSelector<UserModel>('user');

const userselector = UserAdapter.getSelectors();


// export const getuserlist = createSelector(getUserState, (state) => {
    // return state.name});
    // userselector.selectAll)  

     export const getuserlist = createSelector(getUserState, userselector.selectAll)
