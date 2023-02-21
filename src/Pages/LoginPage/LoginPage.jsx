import React, { useState } from "react";
import logo from "../../Assets/Img/BascoLogo.png";
import "./LoginPage.css";
function Login(props) {
const [sign, setsign] = useState(true);
const changeLogin = () => {
props.login.setlogin(!props.login.login);
};
const changeBtn = () => {
setsign(!sign);
};

return (
<div className="loginContainer">
  <div className="loginHead">
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <div className="signBtn">
      <button onClick={changeBtn}>
        <span>{sign ? "Sign Up" : "Log In"}</span></button>
    </div>
  </div>
  {sign ? (
  <form className="form" onSubmit={changeLogin}>
    <input id="login" type="text" placeholder="Login" />
    <input id="password" type="password" placeholder="Password" />
    <button className="form-button form-button1"><span> Log In</span></button>
  </form>
  ) : (
  <form className="form" onSubmit={changeLogin}>
    <input id="email" type="Login" placeholder="Login" />
    <input id="number" type="password" placeholder="Password" />
    <button className="form-button form-button1"><span> Sign U</span>p</button>
  </form>
  )}
</div>
);
}

export default Login;