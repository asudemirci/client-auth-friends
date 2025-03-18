import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUserInfo, setAuthUserInfo] = useLocalStorage('s11d2', null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!authUserInfo);

  const login = (userInfo) => {
    setAuthUserInfo(userInfo);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setAuthUserInfo(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, authUserInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
