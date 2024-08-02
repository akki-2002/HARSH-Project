import React, { useState } from "react";
import "./Sign.css";
import emailImg from "../../components/Images/email.png";
import lock from "../../components/Images/lock.png";
import show from "../../components/Images/show.png";
import hide from "../../components/Images/hide.png";
import logo from "../../components/Images/logo.png"
import { Link } from "react-router-dom";

function Signin() {
  const [move, setMove] = useState();
  const [move2, setMove2] = useState();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailClick = () => {
    setMove({
      top: "-15px",
    });

    if (!password) {
      setMove2({
        top: "13px",
      });
    }
    setIsVisible(false);
    setPassInput("password");
  };

  const handlePasswordClick = () => {
    setMove2({
      top: "-15px",
    });

    if (!email) {
      setMove({
        top: "13px",
      });
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [passInput, setPassInput] = useState("password");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setPassInput(isVisible ? "password" : "text");
  };

  return (
    <>
      <div className="signupMain">
        <div className="signup">
        <img src={logo} alt="" style={{ width: "20%" }}/>

          <div className="signupHeading">Log in</div>
          <form action="">
            <div className="signupContent" onClick={handleEmailClick}>
              <label htmlFor="" style={move}>
                {" "}
                <img src={emailImg} alt="email" />{" "}
                <p>
                  Email Address <span>*</span>
                </p>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="signupContent1" onClick={handlePasswordClick}>
              <label htmlFor="" style={move2}>
                {" "}
                <img src={lock} alt="lock" />{" "}
                <p>
                  Password <span>*</span>
                </p>
              </label>
              <div className="ip">
                <input
                  type={passInput}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="eye">
                  <img
                    src={isVisible ? show : hide}
                    alt=""
                    onClick={toggleVisibility}
                  />
                </div>
              </div>
            </div>

            <div className="signupBtns">
              <div className="signupBtn">
              <Link to={'/'} style={{ textDecoration: 'none',  cursor: 'pointer' }}> <button>LOG IN</button> </Link>
              </div>

              <p>OR</p>

              <div className="loginBtn">
                <Link to={'/signup'} style={{ textDecoration: 'none',  cursor: 'pointer' }}><button>REGISTER</button></Link> 
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
