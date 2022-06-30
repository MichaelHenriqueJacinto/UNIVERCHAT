/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="logos">
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
              placeholder="Username" required ref={username} className="loginInput"
            />
            <input
              placeholder="Email" required ref={email} className="loginInput" type="email"
            />
            <input
              placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6"
            />
            <input
              placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password"
            />
            <button className="loginButton" type="submit">
              Registrar
            </button>
              <button className="loginRegisterButton"><Link to="/login" style={{ textDecoration: "none" }}>Logar na Conta</Link></button>
          </form>
        </div>
      </div>
    </div>
  );
}
