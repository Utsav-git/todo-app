import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";

const Login = ({ clientId }) => {
  const history = useHistory();

  const handleLoginSuccess = (res) => {
    console.log(res.profileObj);
    window.localStorage.setItem("token", res.profileObj.googleId);
    history.replace("/");
  };

  const handleLoginFailure = (res) => {
    console.log(res);
  };

  return (
    <div className="login">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
