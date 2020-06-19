import React from 'react';
import { Route } from 'react-router-dom';


export const PrivateRoute = ({url,componentPrivate: ComponentPrivate, componentPublic: ComponentPublic, ...rest}) => {
 
    return (
        
        <Route {...rest} render={props => (
            isLogin() ?
                <ComponentPrivate {...props} />
            : <ComponentPublic {...props} />
        )} />
    );
};


const TOKEN_KEY = 'user';



export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href ="/ufjfportfolioprofissional/build/formlogin";
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}