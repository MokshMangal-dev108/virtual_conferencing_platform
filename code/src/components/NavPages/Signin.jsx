import '../allStyles/Signin.css';
import {React, useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from "react-router-dom"

window.myVariable = 0;
function Signin (){

    const [isLoading, setIsLoading] = useState(false)

    const history = useNavigate()
    const [ user, setUser] = useState({
        email:"",
        password:"",
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const signin = () =>{
        setIsLoading(true)
        const {email, password } = user
        if(email && password){
            axios.post("https://try2-ikm9.onrender.com/signin", user)
            .then( res => {
                window.myVariable = 1;
                history("/")
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
        } else {
            setIsLoading(false)
            alert("invlid input")
        }
    }
    return (
        <div className='mainContainer'>
            {console.log("User", user)}
            <div className='mainContent'>
                Please SignUp to continue <Link className = "crossIcon"to="/" ><i className="fas fa-times"></i></Link>
            </div>
            <div className="upperContainer">
                <div className='upperContainerLeftIn'>
                    <Link className='SignUpText' to="/signup">SignUp</Link>
                </div>
                <div className='upperContainerRightIn'>SignIn</div>
            </div>
            <div className='formContainer'>
                <div className="registerForm">
                    <div className='one1'>
                        <label className='entryLabel' htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="yourEmail@email.com" id="email"
                            value={user.email} onChange={ handleChange }
                        />
                    </div>
                    <div className='one1'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="********" id="password" 
                            value={user.password} onChange={ handleChange }
                        />
                    </div>
                    <button className = "registerButton"type="submit" onClick={signin}>
                        {
                            isLoading ? <div>
                                ...
                            </div> : 'Sign In'
                        }
                    </button>
                    <div className="button" onClick={() => history("/signup")}></div>
                </div>
            </div>
        </div>
    );
}

export default Signin;