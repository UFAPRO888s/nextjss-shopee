// import Image from 'next/image';
import Card from '../ui/Card';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonMenuButton,
  IonItem,
  IonImg,
} from '@ionic/react';
import Notifications from './Notifications';
import { useEffect, useState } from 'react';
// import { notificationsOutline } from 'ionicons/icons';
// import { getHomeItems } from '../../store/selectors';
// import Store from '../../store';

const FeedCard = ({ title, uid, cover_pic }) => (
  <Card className="my-4 mx-auto h-[150px]">
    <IonItem routerLink={`/tabs/feed/${uid}`} className="w-full mx-auto mb-3 rounded-xl object-cover">
      <div className="h-32 w-full relative">
        <IonImg className="rounded-md object-cover min-w-full min-h-full max-w-full max-h-full" src={"https://cf.shopee.co.th/file/" + cover_pic} alt={title} />
      </div>
    </IonItem>
    <div className="px-4 bg-white rounded-b-xl dark:bg-gray-900">
      {/* <h4 className="font-bold py-0 text-s text-gray-400 dark:text-gray-500 uppercase">{type}</h4>
      <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-100">{title}</h2> */}
      <p className="sm:text-sm text-s text-gray-500 mr-1 dark:text-gray-400">{title}</p>
      {/* <div className="flex items-center space-x-4">
        <div className="w-10 h-10 relative">
          <img src={authorAvatar} className="rounded-full object-cover min-w-full min-h-full max-w-full max-h-full" alt="" />
        </div>
        <h3 className="text-gray-500 dark:text-gray-200 m-l-8 text-sm font-medium">{author}</h3>
      </div> */}
    </div>
  </Card>
);

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

const Feed = () => {
  // const homeItems = Store.useState(getHomeItems);
  const [showNotifications, setShowNotifications] = useState(false);
  const [lidata, setlidata] = useState();
  const [lidatahls, setlidatahls] = useState();
  
  useEffect(() => {
    (async () => {
      const aac = await getToken()
      const response = await fetch('https://liveinfinite.ulivestar.com/api/v3/session/active?collectors=ffmpeg%2Chls%2Crtmp%2Csrt', {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${aac['access_token']}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      const sllls = await response.json()
       console.log(sllls)
      const mxas = await sllls.ffmpeg.map((iyys) => {
        return {
          "session_id": iyys['id'],
          "uid": iyys['reference'],
          "username": iyys['reference'],
          "real_username": iyys['reference'],
          "avatar": "th-11134233-7r98s-lm1mun684hs734",
          "nick_name": "Rich 1688 shop",
          "room_id": iyys['reference'],
          "title": "มาแล้วจ้าาาา",
          "cover_pic": "th-11134104-7r98z-lonxkxpzdxkia5",
          "shop_id": 1022624031,
          "start_time": 1705942013522,
          "play_url": "https://play-spe.livestream.shopee.co.th/live/th-live-2489357761975296-5977478_spehqld.flv?auditkey=1.0~giDEQVN1snSKYKVH02fxsiLUmm0w0Ir7OkxUCKNaOJ7OAK71cVe4ZKz6zE6zoo0GcddQ0u39eZUANjDhGaOGdg~d713e63332b9e34eb5521a931f3f15093d033bf88d75ee3ab819069551d86f7f&cdnID=SHOPEE&expire_ts=1705960318&tcLevel=rank_2830%2Cnormal",
          "status": 1,
          "ccu": 14,
          "subtitle": "",
          "score_debug_info": "null",
          "share_url": "https://live.shopee.co.th/share?from=live&session=5977478",
          "endpage_url": "https://live.shopee.co.th/live-end",
          "has_voucher": true,
          "origin_title": "มาแล้วจ้าาาา",
          "has_streaming_price": false,
          "has_draw": false,
          "cover_exp_type": 0,
          "is_seller": true
        }
      })
      const mxashl = await sllls.hls.map((iyys) => {
        return {
          "session_id": iyys['id'],
          "uid": iyys['reference'],
          "username": iyys['reference'],
          "real_username": iyys['reference'],
          "avatar": "th-11134233-7r98s-lm1mun684hs734",
          "nick_name": "Rich 1688 shop",
          "room_id": iyys['reference'],
          "title": "มาแล้วจ้าาาา",
          "cover_pic": "th-11134104-7r98z-lonxkxpzdxkia5",
          "shop_id": 1022624031,
          "start_time": 1705942013522,
          "play_url": "https://play-spe.livestream.shopee.co.th/live/th-live-2489357761975296-5977478_spehqld.flv?auditkey=1.0~giDEQVN1snSKYKVH02fxsiLUmm0w0Ir7OkxUCKNaOJ7OAK71cVe4ZKz6zE6zoo0GcddQ0u39eZUANjDhGaOGdg~d713e63332b9e34eb5521a931f3f15093d033bf88d75ee3ab819069551d86f7f&cdnID=SHOPEE&expire_ts=1705960318&tcLevel=rank_2830%2Cnormal",
          "status": 1,
          "ccu": 14,
          "subtitle": "",
          "score_debug_info": "null",
          "share_url": "https://live.shopee.co.th/share?from=live&session=5977478",
          "endpage_url": "https://live.shopee.co.th/live-end",
          "has_voucher": true,
          "origin_title": "มาแล้วจ้าาาา",
          "has_streaming_price": false,
          "has_draw": false,
          "cover_exp_type": 0,
          "is_seller": true
        }
      })
      if (!mxas) { return }
      setlidata(mxas)
      setlidatahls(mxashl)
    })();
  }, []);
  console.log(lidata)
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>LIVE</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LIVE LIST</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
        <div className='grid grid-cols-2 gap-1'>
          {lidata && lidata.map((i, index) => (
            <FeedCard {...i} key={index} />
          ))}
          {lidatahls && lidatahls.map((i, index) => (
            <FeedCard {...i} key={index} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Feed;
