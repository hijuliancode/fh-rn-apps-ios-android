import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReduer';

// Definir que información tendrémos en el contexto
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// El estado inicial, como quiero que sea el estado cuando la app se lanza
const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a react, como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el proveedor de información
export const AuthProvider: React.FC = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({
      type: 'SIGN_IN',
    });
  };

  const signOut = () => {
    dispatch({type: 'SIGN_OUT'});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
