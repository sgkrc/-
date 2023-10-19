import React from "react";
import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../containers/auth/LoginForm";

const LogIn = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LogIn;
