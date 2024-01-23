import React from 'react';
import { IonAvatar, IonBackButton, IonBadge, IonButtons, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Image from 'next/image';

const ChatList = () => (
   <IonPage>
      <IonHeader>
         <IonToolbar>
            <IonButtons slot="start">
               <IonBackButton defaultHref="/tabs/lists" />
            </IonButtons>
            <IonTitle class='px-0 py-1'>
               <IonItem>
                  <IonAvatar slot="start" className='relative'>
                     <Image fill alt="img-placeholder" src="http://dashcode-react.codeshaper.net/assets/user-2.2006f1b4.jpg" />
                  </IonAvatar>
                  <IonLabel>
                     <IonText>
                        <h3>My Account</h3>
                     </IonText>
                     <IonText color="medium">
                        <p className='text-xs mt-1 text-emerald-600'>Available</p>
                     </IonText>
                  </IonLabel>
               </IonItem>
            </IonTitle>
         </IonToolbar>
      </IonHeader>

      <IonContent>
         <IonSearchbar></IonSearchbar>
         <IonItem routerLink='/chat/message' className="list-entry">
            <IonAvatar slot="start">
               <IonImg src='https://ionicframework.com/docs/img/demos/avatar.svg' className="object-cover" alt="" fill />
            </IonAvatar>
            <IonLabel className='my-4'>
               <IonText>
                  <h3>Kathryn Murphy</h3>
               </IonText>
               <IonText color="medium">
                  <p className='text-xs mt-1'>Hey! there Im here...</p>
               </IonText>
            </IonLabel>
            <IonLabel slot="end" className='flex flex-col items-center'>
               <div className="text-xs">12:20 PM</div>
               <IonBadge color="primary" className='rounded-full text-[10px] mt-1'>22</IonBadge>
            </IonLabel>
         </IonItem>
      </IonContent>
   </IonPage>

);

export default ChatList;
