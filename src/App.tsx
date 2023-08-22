import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { heart } from 'ionicons/icons';
import FinancialUtilities from './pages/FinancialUtilities';
import HealthUtilities from './pages/HealthUtilities';
//import PillCounter from './pages/PillCounter';
//import FunMoney from './pages/FunMoney';
import getUtilities from './pages/RouteUtilities';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { cash } from 'ionicons/icons'

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const utilities = getUtilities()
console.log(utilities)

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/physical">
            <HealthUtilities /> 
          </Route>
          <Route exact path="/financial">
           <FinancialUtilities />
          </Route>
          <Route exact path="/">
            <Redirect to="/financial/" />
          </Route>
          {
            utilities.map(utility => {
              return (
                <Route exact path={`${utility.url}`} key={`${utility.id}`}>{utility.routePath}</Route>
              )
            })
          }
        </IonRouterOutlet>
        {/*
          <Route exact path="/fun-money/">
            <FunMoney />
          </Route>
          <Route exact path="/pill-counter/">
            <PillCounter />
          </Route>
        */}

        <IonTabBar slot="bottom">
          <IonTabButton tab="physical" href="/physical">
            <IonIcon aria-hidden="true" icon={heart} />
            <IonLabel>Physical</IonLabel>
          </IonTabButton>
          <IonTabButton tab="financial" href="/financial/">
            <IonIcon aria-hidden="true" icon={cash} />
            <IonLabel>Financial</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
