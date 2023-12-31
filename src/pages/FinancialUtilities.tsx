import { IonContent, IonHeader, IonList, IonPage, IonItem, IonTitle, IonToolbar } from '@ionic/react';
import getUtilities from './RouteUtilities';

const utilities = getUtilities('financial')

const FinancialUtilities: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="warning">Financial Utilities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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

export default FinancialUtilities;
