import { createReducer ,on} from "@ngrx/store";
import { UserState } from "./User.state";
// import { setUser } from './User.action';

const _userReducer= createReducer(UserState)
export function UserReducer(state: any , action:any){}

/**************************** */
import { login, loginSuccess, loginFailure } from './User.action';

export interface State {
  token: string;
  error: string;
  isLoading: boolean;
}

const initialState: State = {
  token: '',
  error: '',
  isLoading: false
};

export const loginReducer = createReducer(initialState,
  on(login, state => ({ ...state, isLoading: true })),
  on(loginSuccess, (state, { token }) => ({ ...state, token, isLoading: false })),
  on(loginFailure, (state, { error }) => ({ ...state, error, isLoading: false }))
);