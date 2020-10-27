import React, {createContext, useState} from 'react';
import {auth} from '../firebase';

export const AppContext = createContext();

function AppProvider({children}) {
  // by default, check localStorage if user exists
  let user = localStorage.getItem('currentUser');

  // eslint-disable-next-line
  const [authState, setAuthState] = useState({
    user: user ? JSON.parse(user) : {},
  });

  const setAuthData = () => {
    localStorage.setItem('currentUser', JSON.stringify(auth.currentUser));
    setAuthState(auth.currentUser);
  };

  const isAuthenticated = () => {
    if (auth.currentUser) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <AppContext.Provider value={{setAuthData, isAuthenticated}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
