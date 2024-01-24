
import { uuid } from 'uuidv4';
import Store from '../../store';
import * as selectors from '../../store/selectors';
import { setSettings } from '../../store/actions';
import { useEffect, useState } from 'react';
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonPopover, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { call, happyOutline, linkOutline, options, sendOutline, videocam } from 'ionicons/icons';
// import EmojiPicker from 'emoji-picker-react';
import PublishingComponent from '../ui/LiveRtmp';
import Publish from '../ui/Media';


async function getToken() {
  const response = await fetch('https://liveinfinite.ulivestar.com/api/login', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      "password": "liveinfinite",
      "username": "admin"
    }),
  });
  const jffs = await response.json()
  return jffs
}



async function getRtmp() {
  const channelid = uuid();
  const aac = await getToken()
  const response = await fetch('https://liveinfinite.ulivestar.com/api/v3/process', {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${aac['access_token']}`
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      "autostart": true,
      "id": channelid,
      "input": [
        {
          "address": channelid,
          "cleanup": [
            {
              "max_file_age_seconds": 0,
              "max_files": 0,
              "pattern": "string",
              "purge_on_delete": true
            }
          ],
          "id": channelid,
          "options": [
            "string"
          ]
        }
      ],
      "limits": {
        "cpu_usage": 0,
        "memory_mbytes": 0,
        "waitfor_seconds": 0
      },
      "options": [
        "string"
      ],
      "output": [
        {
          "address": "string",
          "cleanup": [
            {
              "max_file_age_seconds": 0,
              "max_files": 0,
              "pattern": "string",
              "purge_on_delete": true
            }
          ],
          "id": "string",
          "options": [
            "string"
          ]
        }
      ],
      "reconnect": true,
      "reconnect_delay_seconds": 0,
      "reference": channelid,
      "stale_timeout_seconds": 0,
      "type": "ffmpeg"
    }),
  });
  const jffs = await response.json()
  return jffs
}



const Settings = () => {
  const settings = Store.useState(selectors.getSettings);
  const [showEmoji, setShowEmoji] = useState(false);
  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_API_PATH}/api/user-notification`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setNotificationState(data.notifications);
  //     });
  // }, []);

  // videoStreamer.streamRTSP('uri', [success], [failed]);
  const [image, setImage] = useState('');

  const handleCamera = async () => {
    const result = await getRtmp();

    if (result) {
      setImage(result);
    }
  };

  // rtmp({options: {host:""}}) => {

  // }

  const handleStartRTMP = async () => {
    const result = await getRtmp();
    console.log(result)
    if (result) {
      setImage(result);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='px-0 py-1'>
            <IonItem>
              <IonAvatar slot="start" className='relative'>
                <IonImg fill alt="img-placeholder" src="https://live.shopee.co.th/multipages/_next/static/images/shopee-icon@3x-001f776b28d9838be217f3014778b77e.png" />
              </IonAvatar>
              <IonLabel>
                <IonText>
                  <h3>LIVE XXXX</h3>
                </IonText>
                <IonText color="medium">
                  <p className='text-xs mt-1 text-red-600'>Offline</p>
                </IonText>
              </IonLabel>
            </IonItem>
          </IonTitle>
          <IonButtons slot="end">
            {/* <IonButton>
              <IonIcon icon={videocam} />
            </IonButton>
            <IonButton>
              <IonIcon icon={call} />
            </IonButton> */}
            <IonButton id="popover2">
              <IonIcon icon={options} />
            </IonButton>
            <IonPopover trigger="popover2" triggerAction="click" className=''>
              <IonList className="ion-padding px-5">Hello!</IonList>
              <IonList className="ion-padding px-5">Hello!</IonList>
              <IonList className="ion-padding px-5">Hello!</IonList>
            </IonPopover>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <div className='py-4 flex justify-center'>
          <IonButton onClick={handleStartRTMP}>start</IonButton>
        </div> */}
        <div className='w-full'>
           {/* <PublishingComponent />  */}
          <Publish />
          {/* userSocket={userSocket} */}
        </div>
        <div>
       
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
