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


const isLogin = () => {
    if (localStorage.getItem('user') !== null) {
        return true;
    }
    return false;
};
