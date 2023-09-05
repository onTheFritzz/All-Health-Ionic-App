import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonButton } from "@ionic/react";

const BloodPressure: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blood Pressure Logger</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block">Put Login Here</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default BloodPressure;
