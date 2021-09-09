import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
          alt=""
        />
        <button className="loginScreen__button">Sign in</button>
        <div className="loginScreen__gradient"></div>
        <div className="loginScreen__body">
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
                <button className="loginScreen__getStarted">GET STARTED</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
