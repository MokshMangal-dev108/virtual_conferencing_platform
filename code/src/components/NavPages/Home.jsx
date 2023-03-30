import Navbar from "../Navbar";
import Footer from "../Footer";
import "../allStyles/Home.css";
import { useState } from "react";
import { useEffect } from "react";


function Home (){
    const [text, setCode] = useState("");

    const [codeData, setCodeData] = useState([]);
    const submitCodeForm = (e) =>{
        e.preventDefault();
        const newCodeEntry = {text : text};
        
        setCodeData([...codeData, newCodeEntry]);
    }

    useEffect(()=>{
        console.log(codeData);
    },[codeData])

    return (
        <>
            <Navbar />
            <div className="homePageConatiner">
                <div className="check"></div>
                <div className="megaSection">
                    <div className="textSection">
                        <h1 className="upperTextSection">
                            Smexy
                            <br />
                            Unleash your team's potential 
                            <br />
                            with video conferencing.
                            <br />
                            Communication without limits.
                        </h1>
                        <p className="lowerTextSection">
                        Start your next video call with a single click. No download, plug-in, or login is required. Just get straight to talking, messaging, and sharing your screen.
                        </p>
                    </div>
                    <div className="notText">
                        
                    </div>
                </div>
                <div className="joinContainer">
                    <div className="joinMessage">
                        <h1>Write the room code!</h1>
                        <h1>How about this one</h1>
                    </div>
                    <div className="joinMain">
                        <form action="" className="joinMainForm" onSubmit={submitCodeForm}>
                            <input className="joinCode" type="text" placeholder="Enter Key" name="text" id="text" 
                                value={text} onChange = {(e) => setCode(e.target.value)}
                            /> 
                            <button className="joinButton" type="submit">JOIN MEET</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;