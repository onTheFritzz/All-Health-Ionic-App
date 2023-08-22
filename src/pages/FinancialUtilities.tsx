import { IonContent, IonHeader, IonList, IonPage, IonItem, IonTitle, IonToolbar } from '@ionic/react';
import getUtilities from './RouteUtilities';

const utilities = getUtilities('financial')

const FinancialUtilities: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Financial Utilities</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Financial Utilities</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
            {utilities.map((utility) => 
                <IonItem button key={utility.id} routerLink={`${utility.url}`}>
                    {utility.title}
                </IonItem>
            )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default FinancialUtilities;
