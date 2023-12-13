import {createAction, props } from "@ngrx/store";
import { Admin, Search } from '../Model/admin.model'
import { Users } from "../Model/user.model";

export const ADMIN_LOGIN = '[auth] admin login';

export const GET_USERS='[user] get users'
export const GET_USER_SUCC='[user] get users succ'

export const checkadminlogin = createAction(
    ADMIN_LOGIN ,
    props<{admin : Admin}>()
)

// export const getusers=createAction(GET_USERS, props<{ search : Search}>);
// export const getuserssuccess=createAction(GET_USER_SUCC,props<{userlist:Users[]}>())

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// export const GET_USERS='[user] get users'
// export const GET_USER_SUCC='[user] get users succ'
export const getusers=createAction(GET_USERS)

export const getuserssuccess=createAction(GET_USER_SUCC,props<{userlist:Users[]}>())