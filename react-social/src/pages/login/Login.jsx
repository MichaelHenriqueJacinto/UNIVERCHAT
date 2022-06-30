/* eslint-disable jsx-a11y/alt-text */
import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <div className="img">
            <img className="logoLogin" src="/assets/Logo_Rede_Social.png"></img>
            <h3 className="loginLogo">UNIVERCHAT</h3>
          </div>
          <span className="loginDesc">
            Conectando amigo em um mundo de conhecimento.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email" type="email" required className="loginInput" ref={email}
            />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Logar"
              )}
            </button>
            <span className="loginForgot">Esqueceu a senha?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Criar Conta"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
