import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChange } from '../firebase';

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStatus = onAuthStateChange(setUser);
    return () => {
      userStatus();
    };
  }, [user]);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
