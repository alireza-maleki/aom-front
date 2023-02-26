import React, { useEffect, useState } from "react";


const RegisterContextApi = React.createContext({
    isLoggenIn: true,
    setIsLoggedIn: () => { },
    regiserCode: '',
    onLogOut: () => { },
    onLogin: (phone) => { },
    setRegisterCode: (code) => { }
});


export const RegisterContextProvider = (props) => {

    // ### Handler User Loggin / Register ###
    const [isLoggedIn, setIsLoggedIn] = useState();

    // ### Save Register Code ###
    const [regiserCode, setRegisterCode] = useState();

    // ===
    useEffect(() => {
        // console.log('useEffect - Ctx')
        // const loginStatus = localStorage.getItem('isLoggedIn');

        // if (loginStatus === "1") {
        //     setIsLoggedIn(true);
        // }

    }, []);

    // ===
    const loginHandler = (phone) => {
        localStorage.setItem(`isLoggedIn-ctx => ${phone} `, phone);

        console.log("login - ctx")
        // setIsLoggedIn(true);
    }

    // ===
    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }

    // const value = {
    //     isLoggedIn: isLoggedIn,
    //     onLogin: loginHandler,
    //     onLogOut: logoutHandler 
    // }

    return (
        <RegisterContextApi.Provider
            value={{
                setIsLoggedIn: setIsLoggedIn,
                setRegisterCode: setRegisterCode,
                regiserCode: regiserCode,
                isLoggedIn: isLoggedIn,
                onLogOut: logoutHandler,
                onLogin: loginHandler
            }}
        >
            {props.children}
        </RegisterContextApi.Provider>
    )

}

export default RegisterContextApi;