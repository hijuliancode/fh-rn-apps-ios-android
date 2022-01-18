import {AuthState} from '.';

export const authReducer = (
  state: AuthState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
