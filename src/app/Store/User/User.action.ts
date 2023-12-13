import { createAction, props } from '@ngrx/store';
import { Users,Usercred, Userinfo } from '../Model/user.model';


export const BEGIN_REGISTER = '[auth] begin register';
export const BEGIN_LOGIN = '[auth] begin login';

export const retrieveProfile = createAction('[Profile API] API Success');
export const retrieveProfileSuccess = createAction('[Profile API] API SuccessSuccess',props<{userDetails:Users}>());


export const beginRegister = createAction(
  BEGIN_REGISTER,
  props<{ userdata: Users }>()
);

export const beginLogin = createAction(
  BEGIN_LOGIN,
  props<{ usercred: Usercred }>()
);

//************************************* */
export const login = createAction(
  '[Login] User Login',
  props<{ username: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ token: string }>()
);

export const loginFailure = createAction(
  '[Login] Login Failure',
  props<{ error: string }>()
);
