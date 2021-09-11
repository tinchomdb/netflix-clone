import React, { useState } from "react";
import "./LoginScreen.css";
import RegisterScreen from "./RegisterScreen";
import SignInScreen from "./SignInScreen";

function Login() {
  const [welcome, setWelcome] = useState(true);
  const [toggler, setToggler] = useState(true);

  console.log("toggler " + toggler);
  console.log("welcome " + welcome);

  function funcToggler(value) {
    setWelcome(false);
    setToggler(value);
  }

  return (
    <div className="loginScreen">
      <div className="loginScreen__gradient">
        <h1>asd</h1>
        <img
          className="loginScreen__logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
          alt=""
        />

        <button
          className="loginScreen__button"
          onClick={() => funcToggler(true)}
        >
          Sign in
        </button>

        {welcome ? (
          <div class="content">
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Click the button to start your membership</h3>
            <div className="loginScreen__input">
              <button
                className="loginScreen__getStarted"
                onClick={() => funcToggler(false)}
              >
                GET STARTED
              </button>
            </div>
          </div>
        ) : toggler ? (
          <SignInScreen func={funcToggler} />
        ) : (
          <RegisterScreen func={funcToggler} />
        )}
      </div>
    </div>
  );
}

export default Login;
