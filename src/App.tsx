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
import { cash } from 'ionicons/icons'

// Custom page imports
import FinancialUtilities from './pages/FinancialUtilities';
import HealthUtilities from './pages/HealthUtilities';
import getUtilities from './pages/RouteUtilities';
import BloodPressure from './pages/BloodPressure';

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

/* Theme variables */
import './theme/variables.css';

const utilities = getUtilities()

setupIonicReact();
const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/health">
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
          <IonTabBar slot="bottom">
            <IonTabButton tab="health" href="/health">
              <IonIcon aria-hidden="true" icon={heart} />
              <IonLabel>Health</IonLabel>
            </IonTabButton>
            <IonTabButton tab="financial" href="/financial/">
              <IonIcon aria-hidden="true" icon={cash} />
              <IonLabel>Financial</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
)

export default App;
