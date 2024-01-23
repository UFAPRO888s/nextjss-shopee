import { IonAvatar, IonCheckbox, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonPopover, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router-dom';
import { call, happyOutline, linkOutline, options, sendOutline, videocam } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import Store from '../../store';
import * as actions from '../../store/actions';
import * as selectors from '../../store/selectors';
// import EmojiPicker from 'emoji-picker-react';
import ReactHlsPlayer from 'react-hls-player';


const ListItems = ({ list }) => {
  return (
    <IonList>
      {(list?.items || []).map((item, key) => (
        <ListItemEntry list={list} item={item} key={key} />
      ))}
    </IonList>
  );
};

const ListItemEntry = ({ list, item }) => (
  <IonItem onClick={() => actions.setDone(list, item, !item.done)}>
    <IonLabel>{item.name}</IonLabel>
    <IonCheckbox checked={item.done || false} slot="end" />
  </IonItem>
);

const ListDetail = () => {
  const lists = Store.useState(selectors.getLists);
  const params = useParams();
  // const { listId } = params;
  // const [showEmoji, setShowEmoji] = useState(false);
  // console.log(params.listId)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tabs/feed" />
          </IonButtons>
          <IonTitle class='px-0 py-1'>
            {/* <IonItem>
              <IonAvatar slot="start" className='relative'>
                <IonImg alt="img-placeholder" src="http://dashcode-react.codeshaper.net/assets/user-2.2006f1b4.jpg" />
              </IonAvatar>
              <IonLabel>
                <IonText>
                  <h3>LIVE XXXX</h3>
                </IonText>
                <IonText color="medium">
                  <p className='text-xs mt-1 text-red-600'>Offline</p>
                </IonText>
              </IonLabel>
            </IonItem> */}
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
              <IonList className="ion-padding px-5">Hello World!</IonList>
              <IonList className="ion-padding px-5">Hello World!</IonList>
              <IonList className="ion-padding px-5">Hello World!</IonList>
            </IonPopover>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <div className='relative'>
          <video controls ref={videoRef} className="aspect-auto h-full video-js" />
          <div className='absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent h-48 w-full p-4'>
            <div className='w-full h-full bg-white/30 px-2 rounded-md flex items-center justify-center'><span className='text-3xl font-semibold text_noto'>CHATไม่ว่าง</span></div>
          </div>
        </div> */}
        <div className='z-0'>
          <ReactHlsPlayer
            src={`https://liveinfinite.ulivestar.com/memfs/${params.listId}.m3u8`}
            autoPlay={true}
            controls={false}
            width="100%"
            height="100%"
          />
          <div className='absolute bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent h-48 w-full '>
            <div className='w-full h-full bg-white/30 rounded-md flex items-center justify-center'><span className='text-3xl font-semibold text_noto'>CHATไม่ว่าง</span></div>
          </div>
        </div>
        
        <IonFooter className="py-3 px-2 fixed left-0 bottom-0 w-full bg-gray-900 text-white text-center flex md:space-x-4 sm:space-x-2 border-t border-slate-100 dark:border-slate-700">
          <div className="flex md:space-x-3 space-x-1 items-center">
       
          </div>
          <div className="flex-1 ml-3 relative flex space-x-3 items-center px-2">
            <div className="flex-1">
              <input type="text" placeholder="Type your message..." className="focus:outline-0 block w-full bg-transparent dark:text-white resize-none" defaultValue={""} />
            </div>
            <IonButton className="flex-none">
              <IonIcon icon={sendOutline} />
            </IonButton>
          </div>
        </IonFooter>
        
      </IonContent>
    </IonPage>
  );
};

export default ListDetail;
