import './Register.css';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordr, setPasswordr] = useState("");
    const [errMsg, seterrMsg] = useState("");

    function submitRegister(){
        seterrMsg('');
        console.log('registering...');
    }

    return (
        <div className='RegisterPage'>
            <div id='loginModal_Logo'>
                <div id='logoRedCircle'>
                <div id='logoNumber'>2</div>
                </div>
                <div id='logoText'>hand</div>
            </div>
            
            <div id='loginModal_title'>
                <h2>Register new account</h2>
            </div>

            <form className='RegisterPageForm'>
                <div className='InputContainer'>
                    <div className='accessFormLabel'>Username or Email</div>
                    <input type="text" name="name" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='InputContainer'>
                    <div className='accessFormLabel'>Password</div>
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='InputContainer'>
                    <div className='accessFormLabel'>Re-enter Password</div>
                    <input type="password" name="password" onChange={e => setPasswordr(e.target.value)} />
                </div>
                <div id='InputContainerToS'>
                    <input type="checkbox" name="password" onChange={e => setPasswordr(e.target.value)} />
                    <div className='accessFormLabel'>By submitting this form you agree to our Terms and Conditions</div>
                </div>
                <div className='InputContainer'>
                    <button id='loginSubmitBtn' type='submit' onClick={submitRegister}> Register new account </button>
                </div>
            </form>

            <div className= {!errMsg ? 'LoginErrMsg.hidden' : 'LoginErrMsg'}>{errMsg}</div>
        </div>
    );
}

export default Register;