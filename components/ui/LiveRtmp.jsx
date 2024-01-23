import React, { useState, useEffect, useRef } from 'react';
import { WebRTCAdaptor } from '@antmedia/webrtc_adaptor';
import { IonButton } from '@ionic/react';
import io from "socket.io-client";


function sendToPeer(messageType, payload) {
    socket.emit(messageType, {
        socketID: socket.id,
        payload
    });
}

const PublishingComponent = () => {
    const [publishing, setPublishing] = useState(false);
    const [websocketConnected, setWebsocketConnected] = useState(false);
    const [streamId, setStreamId] = useState('stream123');
    const webRTCAdaptor = useRef(null);
    const publishedStreamId = useRef(null);

    const handlePublish = () => {
        setPublishing(true);
        webRTCAdaptor.current.publish(streamId);
        publishedStreamId.current = streamId
    };

    const handleStopPublishing = () => {
        setPublishing(false);
        webRTCAdaptor.current.stop(publishedStreamId.current);
    };

    const handleStreamIdChange = (event) => {
        setStreamId(event.target.value);
    };

    useEffect(() => {
        if (webRTCAdaptor.current === undefined || webRTCAdaptor.current === null) {
            webRTCAdaptor.current = new WebRTCAdaptor({
                websocket_url: 'wss://test.antmedia.io:/WebRTCAppEE/websocket',
                mediaConstraints: {
                    video: true,
                    audio: true,
                },
                peerconnection_config: {
                    iceServers: [
                        { urls: 'stun:stun.l.google.com:19302' },
                        { urls: 'stun:stun1.l.google.com:19302' },
                        { urls: 'stun:stun2.l.google.com:19302' },
                        { urls: 'stun:stun3.l.google.com:19302' },
                        { urls: 'stun:stun4.l.google.com:19302' },
                      ]
                },
                sdp_constraints: {
                    OfferToReceiveAudio: false,
                    OfferToReceiveVideo: false,
                },
                localVideoId: 'localVideo',
                dataChannelEnabled: true,
                callback: (info, obj) => {
                    if (info === 'initialized') {
                        setWebsocketConnected(true);
                    }
                    console.log(info, obj);
                },
                callbackError: function (error, message) {
                    console.log(error, message);
                },
            });
        }
    }, []);

    const socket = io.connect("43.228.86.6:3030");


    let candidates = [];

    useEffect(() => {
        //     const loginfo = getStream()
        // console.log(ws)
        socket.on("connection", success => {
            console.log(success);
        });
        socket.on("connection-success", success => {
            console.log(success);
        });

        socket.on("offerOrAnswer", sdp => {
            textAreaRef.current.value = JSON.stringify(sdp);
        });

        socket.on("candidate", candidate => {
            candidates = [...candidates, candidate];
        });

        socket.on('room_created', async () => {
            console.log('Socket event callback: room_created')
            await setLocalStream(mediaConstraints)
            isRoomCreator = true
          })

    }, []);

    const VideoPreview = () => {
        useEffect(() => {
            var constraints = {
                video: {
                    width: 720,
                    height: 1280,
                    frameRate: {
                        ideal: 60,
                        min: 10
                    }
                },
                audio: false
            };
            async function getMedia(constraints) {
                let stream = null;
                try {
                    stream = await navigator.mediaDevices.getUserMedia(constraints);
                    console.log(stream.getAudioTracks()[0].getCapabilities());
                    localVideoref.current.srcObject = stream;
                    localVideoref.current.muted = false;
                } catch (err) {
                    console.log(err);
                }
                console.log(stream)
            }

            getMedia(constraints);

        }, []);
        var localVideoref = React.createRef();

        // ffmpegVideo = childProcess.spawn('ffmpeg', [
        //     '-nostdin', '-re', '-f', 'concat', '-safe', '0', '-i', 'playlist.txt',
        //     '-vcodec', 'libx264',
        //     '-s', '1920x1080',
        //     '-r', '30',
        //     '-b:v', '5000k',
        //     '-acodec', 'aac',
        //     '-preset', 'veryfast',
        //     '-f', 'flv',
        //     `rtmp://localhost:1935/live/video` // envoie le flux vidéo au serveur rtmp local
        // ]);
        //rtmp://liveinfinite.ulivestar.com/live/e7a9b6ac-a59b-4e48-9a85-29481a4a7391.stream?token=liveinfinite



        return (
            <div>
                peer con
                <video ref={localVideoref}
                    controls={false}
                    autoPlay={true}
                    muted={true}
                    style={{
                        width: '100%',
                        height: '60vh',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        backgroundColor: 'black',
                    }} >
                </video>
            </div>);
    }

    return (
        <div className="w-full">
            <div className="w-full mb-4">
                <div className='w-full'>
                    <VideoPreview />
                </div>
            </div>
            <div className="w-full text-center">
                <div>
                    <div className="mb-3">
                        <input
                            className="rounded-full bg-violet-100 text-xl border-2 border-purple-500 p-4 placeholder-purple-400 focus:text-violet-950 focus:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            type="text"
                            defaultValue={streamId}
                            onChange={handleStreamIdChange}
                        />
                    </div>
                </div>
                <div>
                    {!publishing ? (
                        <IonButton variant="primary" disabled={!websocketConnected} onClick={handlePublish}>
                            Start Publishing
                        </IonButton>
                    ) : (
                        <IonButton variant="danger" onClick={handleStopPublishing}>
                            Stop Publishing
                        </IonButton>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PublishingComponent;
