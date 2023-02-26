import classes from "./RegisterCode.module.scss";

import { useState, useContext, useEffect } from "react";
import RegisterContextApi from "../contexts/RegisterContext";

import { TextField, Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import axios from "axios";

import { useRouter } from "next/router";



function RegisterCode() {

    const routes = useRouter();

    const [enterCode, setEnterCode] = useState();
    const [showError, setShowError] = useState(false);

    const registerCtx = useContext(RegisterContextApi);

    console.log(registerCtx.regiserCode);
    console.log(typeof registerCtx.regiserCode);

    const textInputHandler = (e) => {
        setEnterCode(parseInt(e.target.value));
        // console.log(e.target.value);
        // console.log(typeof e.target.value);
    }
    // console.log(typeof enterCode)


    // === Show Error To User ===
    const showErrorToUser = <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error" className="fw-bold fs-5">کد وارد شده اشتباه است.</Alert>
    </Stack>


    const submitUserCodeHandler = async (e) => {
        e.preventDefault();

        setShowError(false);

        if (registerCtx.regiserCode === enterCode) {

            const data = await axios.post("http://192.168.0.112:1313/accounts/v1/login_verify/", {
                "code": enterCode
            })

            registerCtx.setIsLoggedIn(true);

            console.log(registerCtx.isLoggenIn);

            routes.push("/");

            localStorage.setItem("access_token", data.data.access);

            console.log(data.data.access);

        } else {
            // alert("کد وارد شده اشتباه است.")
            // <Stack sx={{ width: '100%' }} spacing={2}>
            //     <Alert severity="error">کد وارد شده اشتباه است.</Alert>
            // </Stack>
            setShowError(true);
            showErrorToUser
        }
    }

    useEffect(() => {

        const error = setInterval(() => {
            setShowError(false);
        }, 5000);

        return () => {
            clearInterval(error);
        }

    }, [showError])


    return (
        <div className={classes["register-code"]}>

            <div className="container">

                <div className="row align-items-center justify-content-center text-center">

                    <div className={` col-lg-4 col-md-6 p-5 ${classes['input-box']} `}>

                        <div className={classes['text-input']}>
                            <TextField onChange={(e) => textInputHandler(e)} label="کد ارسال شده را وارد کنید." variant="outlined" />
                        </div>

                        <div className="mt-5">
                            <Button onClick={submitUserCodeHandler} className="fw-bold fs-5" variant="contained">ارسال</Button>
                        </div>

                    </div>

                </div>


            </div>

            <div className={` row ${classes['error-message']}`}>

                {showError && showErrorToUser}

            </div>

        </div>
    )
}

export default RegisterCode