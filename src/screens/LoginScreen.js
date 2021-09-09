import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__gradient">
        <img
          className="loginScreen__logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
          alt=""
        />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
        {signIn ? (
          <SignInScreen />
        ) : (
          <div class="content">
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
