import {AuthState} from '.';

export type AuthActionTypes = {
  type: 'SIGN_IN' | 'SIGN_OUT';
};

export const authReducer = (
  state: AuthState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
      };
    default:
      return state;
  }
};
