import '../allStyles/Signin.css';
import {React, useState} from "react";
import { Link } from 'react-router-dom';


function Signin (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [alldata, setAllData] = useState([]);

    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry = {email : email , password : password};

        setAllData([...alldata,newEntry]);
        console.log(alldata);
    } 

    return (
        <div className='mainContainer'>
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
                <form action="" onSubmit = {submitForm} className="registerForm">
                    <div className='one'>
                        <label className='entryLabel' htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="yourEmail@email.com" id="email"
                            value={email} onChange = {(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='one'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="********" id="password" 
                            value={password} onChange = {(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className = "registerButton"type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;