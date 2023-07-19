import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import { useState } from "react";
import { authApi } from "../utils/AuthApi";


function Register({openAuthorizationPopup, handleAuthorizationChangeStatus}) {
  const [formValue, setFormValue ] = useState({
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formValue;
    authApi.register( password, email )
    .then(() => {
      handleAuthorizationChangeStatus(true);
      openAuthorizationPopup();
    })
    .catch((error) => {
      handleAuthorizationChangeStatus(false);
      openAuthorizationPopup();
      console.error(error);
    })
    
    
  }

  return (
    <>
        <Header name="sign-up"/>
        <AuthForm name="sign-up" onSubmit={ handleSubmit } onChange={ handleChange } formValue={ formValue }></AuthForm>
    </>
    
  );
}

export default Register;