import React from 'react';
import { Route } from 'react-router-dom';


export const PrivateRoute = ({ url, componentPrivate: ComponentPrivate, componentPublic: ComponentPublic, ...rest }) => {

    return (

        <Route {...rest} render={props => (
            isLogin(props.match.params.user) ?
                <ComponentPrivate {...props} />
                : <ComponentPublic {...props} />
        )} />
    );
};


const TOKEN_KEY = 'user';



export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/ufjfportfolioprofissional/build/formlogin";
}

export const isLogin = (user) => {
    if (user&&localStorage.getItem(TOKEN_KEY)) {
        if (user!==localStorage.getItem(TOKEN_KEY).user_name) {
            return true;
        }
    }
    return false;
}