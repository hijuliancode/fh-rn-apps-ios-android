import {AuthState} from '.';

export type AuthActionTypes =
  | {type: 'SIGN_IN' | 'SIGN_OUT'}
  | {type: 'CHANGE_USERNAME'; payload: string}
  | {type: 'CHANGE_FAVORITE_ICON'; payload: string};

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
        username: undefined,
        favoriteIcon: undefined,
      };
    case 'CHANGE_FAVORITE_ICON':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};
