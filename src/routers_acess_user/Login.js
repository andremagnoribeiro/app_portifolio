import React from 'react';
import { Route } from 'react-router-dom';



//class
export const PrivateRoute = ({
    url,
    componentAdmin: ComponentAdmin,
    componentPrivate: ComponentPrivate,
    componentPublic: ComponentPublic,
    ...rest }) =>
    <Route {...rest} render={
        props => {
            if (isLogin() === "public") {
                return <ComponentPublic {...props} />;
            } else if (isLogin() === "private") {
                return <ComponentPrivate {...props} />;
            } else if (isLogin() === "admin") {
                return <ComponentAdmin {...props} />;
            }
        }
    }
    />




const TOKEN_KEY = 'user';



export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/formlogin";
}


const isLogin = () => {
    if (localStorage.getItem('user') !== null) {
        var user = JSON.parse(localStorage.getItem('user'));

        if (user !== null) {

            if (user.user_type === 'admin') {
                return 'admin';
            }
            return 'private';
        }
    }
    return 'public';
};
