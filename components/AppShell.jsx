import { IonApp, IonLabel, IonRouterOutlet, setupIonicReact } from '@ionic/react';
// import { cog, flash, list } from 'ionicons/icons';
import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

// import Feed from './pages/Feed';
// import Lists from './pages/Lists';
// import ListDetail from './pages/ListDetail';
// import Settings from './pages/Settings';
import Tabs from './pages/Tabs';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

setupIonicReact({
  mode: 'ios',
  animated: true,
});

window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {}
});

defineCustomElements(window);

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/tabs" render={() => <Tabs />} />
          <Route path="/" render={() => <Redirect to="/tabs/feed" />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
