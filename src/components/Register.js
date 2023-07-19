import React from "react";
import Header from "./Header";
import AuthForm from "./AuthForm";
import { useState } from "react";
import { register } from "../utils/AuthApi";


function Register({openAuthorizationPopup}) {
  const [formValue, setFormValue ] = useState({
    password: '',
    email: ''
  });

  const [isSuccess, setisSuccess] = useState(null);

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
    register(password, email)
    .then(() => {
      
    })
    .catch(console.log("400ka"));
    console.log(formValue);
  }

  return (
    <>
        <Header name="sign-up"/>
        <AuthForm name="sign-up" onSubmit={ handleSubmit } onChange={ handleChange } formValue={ formValue }></AuthForm>
    </>
    
  );
}

export default Register;