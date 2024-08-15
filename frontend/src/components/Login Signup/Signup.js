import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import emailImg from "../../components/Images/email.png";
import lock from "../../components/Images/lock.png";
import show from "../../components/Images/show.png";
import hide from "../../components/Images/hide.png";
import logo from "../../components/Images/logo.png";
import { useNavigate } from "react-router-dom";
import useSignup from "../../hooks/useSignup";


function Signup() {
  const [move, setMove] = useState();
  const [move2, setMove2] = useState();

  const [username, setUsername] = useState(""); // State for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup, error, isLoading} = useSignup()

  const navigate = useNavigate()

// Authentication 

const handleSubmit = async (e) => {
  e.preventDefault();
  await signup(username, email, password, 'User');

  if(!error)
  {
    console.log("Successfully registered")
    navigate('/')
  }
      
};


  const handleNameClick = () => {
    setMove({
      top: "-15px",
    });

    if (!email) {
      setMove2({
        top: "13px",
      });
    }
    setIsVisible(false);
    setPassInput("password");
  };

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
          <img src={logo} alt="logo" style={{ width: "20%" }} />
          <div className="signupHeading">Create Account</div>
          <form onSubmit={handleSubmit}>
            <div className="signupContent">
              <input
                type="text"
                placeholder=" "
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <label>
                <img src={emailImg} alt="name" />
                <p>
                  Name <span>*</span>
                </p>
              </label>
            </div>

            <div className="signupContent">
              <input
                type="email"
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>
                <img src={emailImg} alt="email" />
                <p>
                  Email Address <span>*</span>
                </p>
              </label>
            </div>

            <div className="signupContent1">
              <div className="ip">
                <input
                  type={passInput}
                  placeholder=" "
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <label>
                  <img src={lock} alt="lock" />
                  <p>
                    Password <span>*</span>
                  </p>
                </label>
                <div className="eye" onClick={toggleVisibility}>
                  <img src={isVisible ? show : hide} alt="visibility toggle" />
                </div>
              </div>
            </div>

            <div className="signupBtns">
              <div className="signupBtn">
                {/* <Link
                  to={"/"}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                > */}
                  <button className="rbn">REGISTER</button>
                {/* </Link> */}
              </div>

              <p className="or">OR</p>

              <div className="loginBtn">
                <Link
                  to={"/signin"}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <button>LOG IN</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  );
}

export default Signup;
