import React from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
import App from '../App';
import app from '../firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = {displayName:'Muri Khan'}
    const authInfo = {
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;