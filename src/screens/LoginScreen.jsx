import React from "react";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <div className="row">
      <div className="col-11 col-xl-4 col-lg-5 col-md-6 col-sm-7 mx-auto">
        <h1 className="text-center my-5">Login to Prade</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;
