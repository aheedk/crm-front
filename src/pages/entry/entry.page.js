import React, {useState} from "react";
import { Jumbotron } from "react-bootstrap";
import "./entry.style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";


export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [frmLoad, setFrmLoad] = useState("login");
    

const handleOnChange = e => {
    const {name, value} = e.target;

    switch(name){
        case "email":
            setEmail(value);
            break;

        case "password":
            setPassword(value);
            break;

        default:
            break;
    }
};

const handleOnSubmit = e => {
    e.preventDefault()

    if(!email || !password){
        return alert("Fill up all the form!")
    }
    //todo call api to submit form
}

const handleOnResetSubmit = e => {
    e.preventDefault()

    if(!email){
        return alert("Please enter email!")
    }
    //todo call api to submit form
}

const formSwitcher = frmType => {
    setFrmLoad(frmType);
}
  return (
    <div className='entry-page bg-info'>
        <Jumbotron className='form-box'>
            {frmLoad === "login" && (
                <LoginForm handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                pass={password}
                />
            )}
            {frmLoad === "reset" && (
            <ResetPassword handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
            />
            )}

        </Jumbotron>
    </div>
  )
}
