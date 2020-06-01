import React from 'react';
import { Route , Redirect} from 'react-router-dom';


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
    window.location.href ="/formlogin";
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        var userss=JSON.parse(localStorage.getItem(TOKEN_KEY));
        console.log("user",userss.email);
        console.log("password",userss.password);
        return true;
    }

    return false;
}