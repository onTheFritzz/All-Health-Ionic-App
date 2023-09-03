import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonContent, IonButton } from "@ionic/react";
let loggedIn = false
const BloodPressure: React.FC = () => {
  if (loggedIn) {
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
          <IonButton expand="block">Login</IonButton>
        </IonContent>
      </IonPage>
    );
  } else {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blood Pressure Loggerzzzz</IonTitle>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    );
  }
};

export default BloodPressure;
