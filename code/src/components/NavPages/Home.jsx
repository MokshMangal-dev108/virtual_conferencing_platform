import Navbar from "../Navbar";
import Footer from "../Footer";
import "../allStyles/Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import animation from "../animation.gif";
import screenSharing from "../screenSharing.png";
import videoStreaming from "../videoStreaming.png";
import voiceStreaming from "../voiceStreaming.png";
import chat from "../chat.png";
import recording from "../recording.png";
import whiteboard from "../whiteboard.png";


function Home (){

    function generateRandomString() {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 10; i++) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
        return result;
      }
      

    const navigate = useNavigate();

    const [text, setCode] = useState(generateRandomString());

    const submitCodeForm = (e) =>{
        e.preventDefault();
        if(window.myVariable===1){
            navigate(`/Room/${text}`);
        }
    }

    return (
        <>
            <Navbar />
            <div className="homePageConatiner">
                <div className="check"></div>
                <div className="megaSection">
                    <div className="textSection">
                        <h1 className="upperTextSection">
                            VirtualVibe
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
                        <img src={animation} className='animation'/>
                    </div>
                </div>
                <div className="joinContainer">
                    <div className="joinMessage">
                        <h1>Write the room code!</h1>
                        <h1>How about this one</h1>
                    </div>
                    <div className="joinMain">
                        <form action="" className="joinMainForm" onSubmit={submitCodeForm}>
                            
                            <div className="joinCode"><input className=" typing-animation" type="text" placeholder="Enter Key" name="text" id="text" 
                                value={text} onChange = {(e) => setCode(e.target.value)}
                            /> </div>
                            
                            <button className="joinButton" type="submit">JOIN MEET</button>
                        </form>
                    </div>
                </div>
                <div className="line">
                    <div className="innerLine"></div>
                </div>
                <div className="features">
                    <div className="layer0">
                        <div className="king">
                            <h1>FEATURES!</h1>
                        </div>
                    </div>
                    <div className="layer1">
                        <div className="one">
                            <img src={screenSharing} className='screenSharing' id='nacho' />
                            <h1>Screen Sharing</h1>
                            <p className = 'textChange'>Share your screen, application window, present your documents, slides and more.</p>
                        </div>
                        <div className="two">
                            <img src={videoStreaming} className='videoStreaming' id='nacho' />
                            <h1>WebCam Streaming</h1>
                            <p className = 'textChange'>Having the webcam on, allows participants to make a deeper connection with you. Up to 4k resolution.</p>
                        </div>
                        <div className="three">
                            <img src={voiceStreaming} className='voiceStreaming' id='nacho' />
                            <h1>Audio Streaming</h1>
                            <p className = 'textChange'>Echo cancellation and noise suppression that make your audio crystal clear.</p>
                        </div>
                    </div>
                    <div className="layer2">
                        <div className="one">
                            <img src={chat} className='chat' id='nacho' />
                            <h1 id="chate">Chat</h1>
                            <p className = 'textChange'>Chat with others in meeting with integrated emoji picker to show your feeling.</p>
                        </div>
                        <div className="two">
                            <img src={recording} className='recording' id='nacho' />
                            <h1>Recording meeting</h1>
                            <p className = 'textChange'>Record your Screen, Video, and Audio on Your browser Blob. Save it for using it in the future or to share with others.</p>
                        </div>
                        <div className="three">
                            <img src={whiteboard} className='whiteboard' id='nacho' />
                            <h1>Whiteboard</h1>
                            <p className = 'textChange'>Advanced interactive whiteboard to draw and explain your concepts to the other participants in the meeting.</p>
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="innerLine"></div>
                </div>
                <div className="pagalBanao">
                    <h1 className="pagaltext">Call directly with mail only!</h1>
                    <div className="innerpagal">
                        <input type="email" className="pagalmail" placeholder="mail"/>
                        <button className="pagalButton">Call</button>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
