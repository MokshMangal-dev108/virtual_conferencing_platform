import Navbar from "../Navbar";
import Footer from "../Footer";
import "../allStyles/Schedule.css";
import calander from "../calander.gif";
import emailjs from '@emailjs/browser';
import {useRef } from 'react';
function Schedule (){

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_kzkqzxf', 'template_b9bqedm', form.current, 'LSpCtf1V4L9vrmpEc')
            .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <>
            <Navbar />
            <div className="dummy"></div>

            <div className="mainScheduler">
                <div className="caldetails">
                    <img src={calander} className='calander'/>
                </div>
                <div className="details">
                    <form  ref={form}  action="" onSubmit={sendEmail} >
                        <div className="top1">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="user_email" id="" />
                        </div>
                        <div className="top2">
                            <label htmlFor="email">Subject</label>
                            <input type="text" name="message" id="" />
                        </div>
                        <div className="clockSet">
                            <input type="datetime-local" name="message" id="" max={`${(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)).toISOString().slice(0, -8)}`} />
                        </div>
                        <input className="formButton" type="submit" value="Send"/>
                    </form>
                </div>   
            </div>
            <Footer />
        </>
    );
}

export default Schedule;