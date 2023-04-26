import Navbar from "../Navbar";
import Footer from "../Footer";
import "../allStyles/Contact.css";
import emailjs from '@emailjs/browser';
import {useRef } from 'react';
function Contact (){

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
        <div>
            <Navbar />
            <div className="contactFormContainer">
                <h1 className="changeColor">Send a message to us!</h1>
                <form ref={form} action="" className="contactForm" onSubmit={sendEmail}>
                    <input className="contactInput " name="user_name" placeholder="Name" type="text"/>
                    <input className="contactInput " name="user_email" type="Email" placeholder="yourEmail@email.com" />
                    <input className="contactInput "type="text" placeholder="Subject"/>
                    <textarea className="contactText " name="message" placeholder="Message" rows="10"></textarea>
                    <input className="formButton" type="submit" value="Send"/>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;