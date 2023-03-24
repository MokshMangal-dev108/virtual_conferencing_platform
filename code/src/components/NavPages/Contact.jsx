import Navbar from "../Navbar";
import Footer from "../Footer";
import "../allStyles/Contact.css";

function Contact (){
    return (
        <div>
            <Navbar />
            <div className="contactFormContainer">
                <h1>Send a message to us!</h1>
                <form action="" className="contactForm">
                    <input className="contactInput "placeholder="Name" type="text"/>
                    <input className="contactInput "type="Email" placeholder="yourEmail@email.com" />
                    <input className="contactInput "type="text" placeholder="Subject"/>
                    <textarea className="contactText "placeholder="Message" rows="10"></textarea>
                    <button className="formButton">Send Message</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;