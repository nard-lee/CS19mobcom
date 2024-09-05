import React, { createContext, useState } from 'react';
import fetchUser from '../hooks/fetchUser';

export const UserContext = createContext(null);

export default function UserProvider({ children }) {

    const { loading, data, error } = fetchUser('user');

    return (

        <UserContext.Provider value={{ loading, data, error }}>
            {children}
        </UserContext.Provider>
    );

}

