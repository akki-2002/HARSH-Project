import React, { useState } from "react";
import "./Sign.css";
import emailImg from "../../components/Images/email.png";
import lock from "../../components/Images/lock.png";
import show from "../../components/Images/show.png";
import hide from "../../components/Images/hide.png";
import logo from "../../components/Images/logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [move, setMove] = useState();
  const [move2, setMove2] = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
  
        const formdata = {
          email,
          password
        }
  
        console.log(formdata)
  
        const response = await fetch('http://localhost:5000/users/login', {
            method: "POST",
            body: JSON.stringify(formdata),
            headers:{
              'Content-Type': 'application/json'
            }
        });
  
        const json = await response.json();
        if (response.ok) {
            console.log("Successfully logged in ", json);

            localStorage.setItem('user', JSON.stringify(json))

            setTimeout(() => {
              
              navigate('/')
            }, 1000);
        } else {
            console.log('Login failed:', json);
        }
    } catch (error) {
        console.log(error);
    }
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
        <img src={logo} alt="" style={{ width: "20%" }}/>

          <div className="signupHeading">Log in</div>
          <form action="" onSubmit={handleSubmit}>
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
              {/* <Link to={'/'} style={{ textDecoration: 'none',  cursor: 'pointer' }}>  */}
              <button className="rbn">LOG IN</button> 
              {/* </Link> */}
              </div>

              <p>OR</p>

              <div className="loginBtn">
                <Link to={'/signup'} style={{ textDecoration: 'none',  cursor: 'pointer' }}><div className="lbn">REGISTER</div></Link> 
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
