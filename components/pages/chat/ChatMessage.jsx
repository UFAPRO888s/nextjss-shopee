import React, { useState } from 'react';
import { IonAvatar, IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonPopover, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Image from 'next/image';
import { call, happyOutline, linkOutline, options, sendOutline, videocam } from 'ionicons/icons';
import EmojiPicker from 'emoji-picker-react';


const ChatMessage = () => {
   const [showEmoji, setShowEmoji] = useState(false);

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton defaultHref="/chat" />
               </IonButtons>
               <IonTitle class='px-0 py-1'>
                  <IonItem>
                     <IonAvatar slot="start" className='relative'>
                        <Image fill alt="img-placeholder" src="http://dashcode-react.codeshaper.net/assets/user-2.2006f1b4.jpg" />
                     </IonAvatar>
                     <IonLabel>
                        <IonText>
                           <h3>Kathryn Murphy</h3>
                        </IonText>
                        <IonText color="medium">
                           <p className='text-xs mt-1 text-red-600'>Offline</p>
                        </IonText>
                     </IonLabel>
                  </IonItem>
               </IonTitle>
               <IonButtons slot="end">
                  <IonButton>
                     <IonIcon icon={videocam} />
                  </IonButton>
                  <IonButton>
                     <IonIcon icon={call} />
                  </IonButton>
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
            <div className="card-body p-0 h-full">
               <div className="divide-y divide-slate-100 dark:divide-slate-700 h-full">
                  <div className="h-full">
                     <div className="chat-content parent-height pb-20">
                        <div className="msgs overflow-y-auto msg-height pt-6 space-y-6">
                           <div className="block md:px-6 px-4">
                              <div className="flex space-x-2 items-start group">
                                 <div className="flex-none">
                                    <IonAvatar className="mt-1 -mr-3">
                                       <IonImg src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="h-10 w-10 relative object-cover" alt="" />
                                    </IonAvatar>
                                 </div>
                                 <div className="flex-1 flex space-x-4">
                                    <div>
                                       <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">Hey! How are you?</div>
                                       <span className="font-normal text-xs text-slate-400 dark:text-slate-400">12:20 pm</span>
                                    </div>
                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                       <div className="relative inline-block">
                                          <div className="block w-full " data-headlessui-state>
                                             <button className="block w-full" id="headlessui-menu-button-:r4j:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                                <div className="label-class-custom">
                                                   <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                      </svg>
                                                   </div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="block md:px-6 px-4">
                              <div className="flex space-x-2 items-start group">
                                 <div className="flex-none">
                                    <IonAvatar className="mt-1 -mr-3">
                                       <IonImg src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="h-10 w-10 relative object-cover" alt="" />
                                    </IonAvatar>
                                 </div>
                                 <div className="flex-1 flex space-x-4">
                                    <div>
                                       <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">Good, I will book the meeting room for you.</div>
                                       <span className="font-normal text-xs text-slate-400 dark:text-slate-400">12:20 pm</span>
                                    </div>
                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                       <div className="relative inline-block">
                                          <div className="block w-full " data-headlessui-state>
                                             <button className="block w-full" id="headlessui-menu-button-:r4k:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                                <div className="label-class-custom">
                                                   <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                      </svg>
                                                   </div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="block md:px-6 px-4">
                              <div className="flex items-start justify-end group w-full">
                                 <div className="no flex space-x-4">
                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                       <div className="relative inline-block">
                                          <div className="block w-full " data-headlessui-state>
                                             <button className="block w-full" id="headlessui-menu-button-:r4l:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                                <div className="label-class-custom">
                                                   <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                      </svg>
                                                   </div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="whitespace-pre-wrap break-all">
                                       <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">Hi, I am good, what about you?</div>
                                       <span className="font-normal text-xs text-slate-400">2:06 pm</span>
                                    </div>
                                 </div>
                                 <IonAvatar className="mt-1 -ml-2 flex justify-end">
                                    <IonImg src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="h-10 w-10 relative object-cover" alt="" />
                                 </IonAvatar>
                              </div>
                           </div>
                           <div className="block md:px-6 px-4">
                              <div className="flex items-start justify-end group w-full">
                                 <div className="no flex space-x-4">
                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                       <div className="relative inline-block">
                                          <div className="block w-full " data-headlessui-state>
                                             <button className="block w-full" id="headlessui-menu-button-:r4m:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                                <div className="label-class-custom">
                                                   <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                      </svg>
                                                   </div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="whitespace-pre-wrap break-all">
                                       <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">Thanks, It will be great.</div>
                                       <span className="font-normal text-xs text-slate-400">2:06 pm</span>
                                    </div>
                                 </div>
                                 <IonAvatar className="mt-1 -ml-2 flex justify-end">
                                    <IonImg src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="h-10 w-10 relative object-cover" alt="" />
                                 </IonAvatar>
                              </div>
                           </div>
                           <div className="block md:px-6 px-4">
                              <div className="flex space-x-2 items-start group">
                                 <div className="flex-none">
                                    <IonAvatar className="mt-1 -mr-3">
                                       <IonImg src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="h-10 w-10 relative object-cover" alt="" />
                                    </IonAvatar>
                                 </div>
                                 <div className="flex-1 flex space-x-4">
                                    <div>
                                       <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">Hey! How are you?</div>
                                       <span className="font-normal text-xs text-slate-400 dark:text-slate-400">12:20 pm</span>
                                    </div>
                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                       <div className="relative inline-block">
                                          <div className="block w-full " data-headlessui-state>
                                             <button className="block w-full" id="headlessui-menu-button-:r4n:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                                <div className="label-class-custom">
                                                   <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                      </svg>
                                                   </div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="block md:px-6 px-4">
                              <div className="flex space-x-2 items-start group">
                                 <div className="flex-none">
                                    <IonAvatar className="mt-1 -mr-3">
                                       <IonImg src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="h-10 w-10 relative object-cover" alt="" />
                                    </IonAvatar>
                                 </div>
                                 <div className="flex-1 flex space-x-4">
                                    <div>
                                       <div className="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all">Good, I will book the meeting room for you.</div>
                                       <span className="font-normal text-xs text-slate-400 dark:text-slate-400">12:20 pm</span>
                                    </div>
                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                       <div className="relative inline-block">
                                          <div className="block w-full " data-headlessui-state>
                                             <button className="block w-full" id="headlessui-menu-button-:r4o:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                                <div className="label-class-custom">
                                                   <div className="h-8 w-8 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-900 flex flex-col justify-center items-center text-xl rounded-full">
                                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                      </svg>
                                                   </div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="block md:px-6 px-4">
                              <div className="flex items-start justify-end group w-full">
                                 <div className="no flex space-x-4">
                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                       <div className="relative inline-block">
                                          <div className="block w-full " data-headlessui-state>
                                             <button className="block w-full" id="headlessui-menu-button-:r4p:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                                <div className="label-class-custom">
                                                   <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                      </svg>
                                                   </div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="whitespace-pre-wrap break-all">
                                       <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">Hi, I am good, what about you?</div>
                                       <span className="font-normal text-xs text-slate-400">2:06 pm</span>
                                    </div>
                                 </div>
                                 <IonAvatar className="mt-1 -ml-2 flex justify-end">
                                    <IonImg src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="h-10 w-10 relative object-cover" alt="" />
                                 </IonAvatar>
                              </div>
                           </div>
                           <div className="block md:px-6 px-4">
                              <div className="flex items-start justify-end group w-full">
                                 <div className="no flex space-x-4">
                                    <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                                       <div className="relative inline-block">
                                          <div className="block w-full " data-headlessui-state>
                                             <button className="block w-full" id="headlessui-menu-button-:r4q:" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state>
                                                <div className="label-class-custom">
                                                   <div className="h-8 w-8 bg-slate-300 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full text-slate-900">
                                                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" viewBox="0 0 24 24">
                                                         <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm7 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                                                      </svg>
                                                   </div>
                                                </div>
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="whitespace-pre-wrap break-all">
                                       <div className="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1">Thanks, It will be great.</div>
                                       <span className="font-normal text-xs text-slate-400">2:06 pm</span>
                                    </div>
                                 </div>
                                 <IonAvatar className="mt-1 -ml-2 flex justify-end">
                                    <IonImg src='https://cdn-icons-png.flaticon.com/512/1177/1177568.png' className="h-10 w-10 relative object-cover" alt="" />
                                 </IonAvatar>
                              </div>
                           </div>
                        </div>
                     </div>
                     <IonFooter className="py-3 px-2 fixed left-0 bottom-0 w-full bg-gray-900 text-white text-center flex md:space-x-4 sm:space-x-2 border-t border-slate-100 dark:border-slate-700">
                        <div className="flex md:space-x-3 space-x-1 items-center">
                           <div className="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full">
                              <IonIcon icon={linkOutline} />
                           </div>
                           <div className="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full">
                              <IonIcon icon={happyOutline} onClick={() => setShowEmoji(state => !state)} />
                           </div>
                        </div>
                        <div className="flex-1 ml-3 relative flex space-x-3 items-center">
                           <div className="flex-1">
                              <input type="text" placeholder="Type your message..." className="focus:outline-0 block w-full bg-transparent dark:text-white resize-none" defaultValue={""} />
                           </div>
                           <div className="flex-none">
                              <IonIcon icon={sendOutline} />
                           </div>
                        </div>
                     </IonFooter>

                  </div>
               </div>
            </div>

            {showEmoji && (<span className='fixed left-0 bottom-0 w-full dark:bg-slate-600'><EmojiPicker lazyLoadEmojis={true} width="100%" theme="dark" /></span>)}

         </IonContent>
      </IonPage>
   );


};

export default ChatMessage;
