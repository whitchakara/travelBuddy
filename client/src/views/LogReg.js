import React from "react";
import Login from '../components/Login';
import Registration from '../components/Registration';

const LogReg = ()=> {
    return (
        <div>
            <h1>Welcome To Travel Buddy!</h1>
            <Registration/>
            <hr/>
            <Login/>
        </div>
    )
}
export default LogReg;