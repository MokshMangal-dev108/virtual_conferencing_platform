import '../allStyles/Signup.css';
import {React, useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//const navigate = useNavigate();
const Signup = ({ setLoginUser}) => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        axios.post("https://try2-ikm9.onrender.com/signup", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history("/")
        })
    }

    

    return (
        <div className='mainContainer'>
            <div className='mainContent'>
                Please SignUp to continue <Link className="crossIcon"to="/" ><i className="fas fa-times"></i></Link>
            </div>
            <div className="upperContainer">
                <div className='upperContainerLeft'>SignUp</div>
                <div className='upperContainerRight'>
                    <Link className='SignInText' to="/signin">SignIn</Link>
                </div>
            </div>
            <div className='formContainer'>
                <div  className="registerForm">
                    <div className='one1'>
                        <label className='entryLabel' htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="yourEmail@email.com" id="email"
                            value={user.email} onChange={handleChange}
                        />
                    </div>
                    <div className='one1'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="********" id="password" 
                            value={user.password} onChange={handleChange}
                        />
                    </div>
                    <button className = "registerButton"type="submit" onClick={signup}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;