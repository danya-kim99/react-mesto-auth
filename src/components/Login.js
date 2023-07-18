import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";

function Login() {
  return (
    <>
        <Header name="sign-in"/>
        <AuthForm name="sign-in"></AuthForm>
    </>
    
  );
}

export default Login;