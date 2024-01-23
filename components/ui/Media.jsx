import React, { Suspense, lazy } from 'react';
import { Device } from 'mediasoup-client';
import { io as socketIOClient } from 'socket.io-client';
import { IonButton, IonInput, IonText } from '@ionic/react';



function Publish(props) {
    const localVideo = React.useRef();
    const localStream = React.useRef();
    const clientId = React.useRef();
    const device = React.useRef();
    const producerTransport = React.useRef();
    const videoProducer = React.useRef();
    const audioProducer = React.useRef();
    const socketRef = React.useRef();

    const [useVideo, setUseVideo] = React.useState(true);
    const [useAudio, setUseAudio] = React.useState(true);
    const [isStartMedia, setIsStartMedia] = React.useState(false);
    const [isPublished, setIsPublished] = React.useState(false);
    const [infoVideo, setinfoVideo] = React.useState([]);
    const [infoVideo1, setinfoVideo1] = React.useState([]);
    
    // ============ UI button ==========
    const handleUseVideo = (e) => {
        setUseVideo(!useVideo);
    };
    const handleUseAudio = (e) => {
        setUseAudio(!useAudio);
    };

    const handleStartMedia = () => {
        if (localStream.current) {
            console.warn('WARN: local media ALREADY started');
            return;
        }

        navigator.mediaDevices
            .getUserMedia({ audio: useAudio, video: useVideo })
            .then((stream) => {
                localStream.current = stream;
                playVideo(localVideo.current, localStream.current);
                setIsStartMedia(true);
            })
            .catch((err) => {
                console.error('media ERROR:', err);
            });
    };

    function playVideo(element, stream) {
        if (element.srcObject) {
            console.warn('element ALREADY playing, so ignore');
            return;
        }
        element.srcObject = stream;
        element.volume = 0;
        return element.play();
    }

    function pauseVideo(element) {
        element.pause();
        element.srcObject = null;
    }

    function stopLocalStream(stream) {
        let tracks = stream.getTracks();
        if (!tracks) {
            console.warn('NO tracks');
            return;
        }

        tracks.forEach((track) => track.stop());
    }

    function handleStopMedia() {
        if (localStream.current) {
            pauseVideo(localVideo.current);
            stopLocalStream(localStream.current);
            localStream.current = null;
            setIsStartMedia(false);
        }
    }

    async function handlePublish() {
        if (!localStream.current) {
            console.warn('WARN: local media NOT READY');
            return;
        }

        // --- connect socket.io ---
        if (!socketRef.current) {
            await connectSocket().catch((err) => {
                console.error(err);
                return;
            });
        }
        // --- get capabilities --
        const data = await sendRequest('getRouterRtpCapabilities', {});
        setinfoVideo('getRouterRtpCapabilities:', data);
        await loadDevice(data);
        //  }

        // --- get transport info ---
        setinfoVideo('--- createProducerTransport --');
        const params = await sendRequest('createProducerTransport', {});
        setinfoVideo('transport params:', params);
        producerTransport.current = device.current.createSendTransport(params);
        setinfoVideo('createSendTransport:', producerTransport);

        // --- join & start publish --
        producerTransport.current.on(
            'connect',
            async ({ dtlsParameters }, callback, errback) => {
                setinfoVideo('--trasnport connect');
                sendRequest('connectProducerTransport', {
                    dtlsParameters: dtlsParameters,
                })
                    .then(callback)
                    .catch(errback);
            }
        );

        producerTransport.current.on(
            'produce',
            async (
                { kind, rtpParameters },
                callback,
                errback
            ) => {
                console.log('--trasnport produce');
                try {
                    const { id } = await sendRequest('produce', {
                        transportId: producerTransport.current.id,
                        kind,
                        rtpParameters,
                    });
                    callback({ id });
                } catch (err) {
                    errback(err);
                }
            }
        );

        producerTransport.current.on('connectionstatechange', (state) => {
            switch (state) {
                case 'connecting':
                    console.log('publishing...');
                    break;

                case 'connected':
                    setinfoVideo1('published');
                    setIsPublished(true);
                    break;

                case 'failed':
                    console.log('failed');
                    producerTransport.current.close();
                    break;

                default:
                    break;
            }
        });

        if (useVideo) {
            const videoTrack = localStream.current.getVideoTracks()[0];
            if (videoTrack) {
                const trackParams = { track: videoTrack };
                videoProducer.current = await producerTransport.current.produce(
                    trackParams
                );
            }
        }
        if (useAudio) {
            const audioTrack = localStream.current.getAudioTracks()[0];
            if (audioTrack) {
                const trackParams = { track: audioTrack };
                audioProducer.current = await producerTransport.current.produce(
                    trackParams
                );
            }
        }
    }

    function handleDisconnect() {
        if (localStream.current) {
            pauseVideo(localVideo.current);
            stopLocalStream(localStream.current);
            localStream.current = null;
        }
        if (videoProducer.current) {
            videoProducer.current.close(); // localStream will stop
            videoProducer.current = null;
        }
        if (audioProducer.current) {
            audioProducer.current.close(); // localStream will stop
            audioProducer.current = null;
        }
        if (producerTransport.current) {
            producerTransport.current.close(); // localStream will stop
            producerTransport.current = null;
        }

        disconnectSocket();
        setIsPublished(false);
        setIsStartMedia(false);
    }

    const loadDevice = async (routerRtpCapabilities) => {
        try {
            device.current = new Device();
            console.log('device.current');
            console.log(device.current);
        } catch (error) {
            if (error.name === 'UnsupportedError') {
                console.error('browser not supported');
            }
        }

        console.log('device.current start');
        console.log(device.current);
        console.log('device.current end');
        await device.current.load({ routerRtpCapabilities });
    };

    function disconnectSocket() {
        if (socketRef.current) {
            socketRef.current.close();
            socketRef.current = null;
            clientId.current = null;
            console.log('socket.io closed..');
        }
    }

    function sendRequest(type, data) {
        return new Promise((resolve, reject) => {
            socketRef.current.emit(type, data, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            });
        });
    }

    const connectSocket = () => {
        if (socketRef.current == null) {
            const io = socketIOClient('43.228.86.6:5005/video-broadcast');
            socketRef.current = io;
        }

        return new Promise((resolve, reject) => {
            const socket = socketRef.current;
            socket.on('connect', function (evt) {
                console.log('socket.io connected()');
            });
            socket.on('error', function (err) {
                console.error('socket.io ERROR:', err);
                reject(err);
            });
            socket.on('message', function (message) {
                console.log('socket.io message:', message);
                if (message.type === 'welcome') {
                    if (socket.id !== message.id) {
                        console.warn(
                            'WARN: something wrong with clientID',
                            socket.io,
                            message.id
                        );
                    }

                    clientId.current = message.id;
                    console.log(
                        'connected to server. clientId=' + clientId.current
                    );
                    resolve();
                } else {
                    console.error('UNKNOWN message from server:', message);
                }
            });
            socket.on('newProducer', async function (message) {
                console.warn('IGNORE socket.io newProducer:', message);
            });
        });
    };

    return (
        <div>
            <div className='px-4'>
                <input
                    disabled={isStartMedia}
                    onChange={handleUseVideo}
                    type='checkbox'
                    checked={useVideo}
                ></input>
                <label>video</label>
            </div>
            <div className='px-4'>
                <input
                    disabled={isStartMedia}
                    onChange={handleUseAudio}
                    type='checkbox'
                    checked={useAudio}
                ></input>
                <label>audio</label>
            </div>
            <div className='px-4'>
            <IonButton disabled={isStartMedia} onClick={handleStartMedia}>
                Start Media
            </IonButton>
            <IonButton
                disabled={!isStartMedia || isPublished}
                onClick={handleStopMedia}
            >
                Stop Media
            </IonButton>

            <IonButton
                disabled={isPublished || !isStartMedia}
                onClick={handlePublish}
            >
                publish
            </IonButton>
            <IonButton
                disabled={!isPublished || !isStartMedia}
                onClick={handleDisconnect}
            >
                Disconnect
            </IonButton>
            </div>
            <div>
                <video
                    ref={localVideo}
                    autoPlay
                    style={{
                        width: '100%',
                        height: '100%',
                        
                    }}
                ></video>
            </div>
            <div className='text-center'>
               <IonText>{infoVideo}</IonText> 
               <IonText>{infoVideo1}</IonText> 
            </div>
        </div>
    );
}

export default Publish;
