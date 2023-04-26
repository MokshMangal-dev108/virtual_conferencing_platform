import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room (){
    const {roomID} = useParams();
    console.log(roomID);
    const meeting = async(e) => {
        const appID = 1108054569;
        const serverSecret = "72366aae002d6712519cdcd08331b24b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, serverSecret, roomID, Date.now().toString(),
            "Join"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container:e,
            scenario:{
                mode: ZegoUIKitPrebuilt.LiveStreaming,
            },

        })
    };


    return (
        <div ref={meeting} style = {{width : "100vw", height: "100vh"}}></div>
    );
}

export default Room;