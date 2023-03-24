import "./allStyles/Footer.css";


const Footer = () =>{
    return(
        <div className="footer">
            <div className="footerTop">
                <div>
                    <h1>Smexy</h1>
                    <p>Connect with ease, connect with confidence.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="footerDown">
                <div>
                    <h4>Project</h4>
                    <a href="/">one</a>
                    <a href="/">two</a>
                    <a href="/">three</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">one</a>
                    <a href="/">two</a>
                    <a href="/">three</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">one</a>
                    <a href="/">two</a>
                    <a href="/">three</a>
                </div>
                <div>
                    <h4>Team</h4>
                    <a href="/">one</a>
                    <a href="/">two</a>
                    <a href="/">three</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;