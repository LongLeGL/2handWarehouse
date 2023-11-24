import './Login.css';
import logoImg from '../icons/logo.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, seterrMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    seterrMsg('');
    if (!email) seterrMsg("Username or Email required !");
    else if (!password) seterrMsg("Password required !");
    else {
      // perform authentication
      let logindata = {email:email,password:password};
      console.log("Authenticating:", logindata);

      const response = await fetch("https://twohandwarehouse-v1.onrender.com/api/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logindata),
      });
      const responseData = await response.json();
      
      if (responseData.errCode === 1){
        seterrMsg("Incorrect password or Email !")
      }
      else{
        console.log("Got user:",responseData.user);
        sessionStorage.setItem("userId", responseData.user.id);
        sessionStorage.setItem("username", responseData.user.email);
        sessionStorage.setItem("userFullName", responseData.user.firstName + ' ' + responseData.user.lastName);
        sessionStorage.setItem("userRole", responseData.user.roleId);
        sessionStorage.setItem("userPhone", responseData.user.phoneNumber);
        window.location.reload();
      }
    }
  }

  return (
    <div className='LoginPage'>
      <div id='loginModal_Logo'>
        <div id='logoRedCircle'>
          <div id='logoNumber'>2</div>
        </div>
        <div id='logoText'>hand</div>
      </div>
      
      <div id='loginModal_title'>
        <h2>Login to your account</h2>
      </div>

      <form className='LoginPageForm'>
        <div className='InputContainer'>
          <div className='accessFormLabel'>Username or Email</div>
          <input type="text" name="name" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='InputContainer'>
          <div className='accessFormLabel'>Password</div>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='InputContainer'>
          <button id='loginSubmitBtn' type='submit' onClick={handleSubmit}> Login </button>
        </div>
      </form>
      <div className={!errMsg ? 'LoginErrMsg.hidden' : 'LoginErrMsg'}>{errMsg}</div>
    </div>
  );
}

export default Login;
