import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import getUtilities from './RouteUtilities';

const utilities = getUtilities('health')

const HealthUtilities: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="warning">Health Utilities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Health Utilities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
            {utilities.map((utility) => 
                <IonItem detail={true} button key={utility.id} routerLink={`${utility.url}`}>
                    {utility.title}
                </IonItem>
            )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HealthUtilities;
