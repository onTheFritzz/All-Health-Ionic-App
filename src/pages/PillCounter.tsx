import { IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardHeader, IonGrid, IonCol } from '@ionic/react';

const PillCounter: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pill Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonCard color="warning">
            <IonCardHeader>Header</IonCardHeader>
            <IonCardContent text-center>Content</IonCardContent>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PillCounter;
