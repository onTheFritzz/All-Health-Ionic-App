import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonInput, IonItem, IonBackButton, IonButtons, IonCardContent,
  IonCol, IonGrid, IonRow, IonButton, IonIcon, IonText } from '@ionic/react';
import { useStoredState } from '../lib/hooks';
import FlipCountdown from '@rumess/react-flip-countdown';
import moment from 'moment';
import { refresh } from 'ionicons/icons';

const FastingCalculator: React.FC = () => {
  let currentTime = moment(new Date()).format("HH:mm") // Shorter format so it gets displayed on mobile

  const [fastingHours, setFastingHours] = useStoredState("Fasting-Hours", 0)
  const [fastingStart, setFastingStart] = useStoredState("Fasting-Start", currentTime)
  
  let thePresent = moment(new Date()).format("MM-DD-YYYY HH:mm:ss") // Current time basline to determine if target is in past or future
  let inputTime = `${moment(new Date()).format("MM-DD-YY")} ${fastingStart}` // End user input value for target time
  let stopFast = moment(inputTime).add(fastingHours, 'hours') // Input time + number of hours fasting == time to stop fasting
  let flipDownTime = stopFast.format("MM-DD-YYYY HH:mm:ss") // Time to stop fast, formatted for flipdown animation component

  let phraseTime = stopFast.format('hh:mm A') // Format for easy end user reading
  let stopPhrase = `Fast ends at: ${phraseTime}`//.split(' ')[1]}`

  let visableCardStatus = 0 // make shit spaceship operator -> false/neutral/true -1/0/1 -> trinary operator
  let fastingMessage = ""
  let maxFastTime = 16

  if (fastingHours != 0 && fastingStart != 0) {
     if (flipDownTime < thePresent || fastingHours > maxFastTime) {
      visableCardStatus = -1

      if (fastingHours > maxFastTime) {
        fastingMessage = "You're fasting for too long!"
      } else {
        fastingMessage = "You don't have a time machine!"
      }
      
    } else {
      visableCardStatus = 1
    }
  }

  function resetValues() {
    setFastingHours(0)
    setFastingStart(currentTime)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fasting Calculator</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {visableCardStatus == -1 && (
          <IonCard>
            <IonCard color="warning">
              <IonCardContent>
                <center>{fastingMessage}</center>
              </IonCardContent>
            </IonCard>
          </IonCard>
        )}
        {visableCardStatus == 1 && (
          <IonCard>
            <IonCard>
              <IonTitle color="warning">
                <center>{stopPhrase}</center>

              </IonTitle>
            </IonCard>
            <IonCard color="warning">
              <IonCardContent>
                <FlipCountdown
                  hideYear
                  hideMonth
                  hideDay
                  endAt={flipDownTime}/>
              </IonCardContent>
            </IonCard>
          </IonCard>
        )}
        <IonCard>        
          <IonCardContent>
            <IonGrid>
              <IonRow>

                <IonCol>
                  <IonItem>
                    <IonInput color="warning" label="Hours" labelPlacement="floating"
                      value={fastingHours}
                      onIonChange={(event) => setFastingHours(event.detail.value)}>
                    </IonInput>
                  </IonItem>
                </IonCol>

                <IonCol>
                  <IonItem>
                    <IonInput label="After" readonly={true}></IonInput>
                  </IonItem>
                </IonCol>

                <IonCol>
                  <IonItem>
                    <IonInput color="warning" labelPlacement="floating" label="Time"
                      value={fastingStart}
                      onIonChange={(event) => setFastingStart(event.detail.value)}>
                    </IonInput>
                  </IonItem>
                </IonCol>

              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" color="warning" onClick={resetValues}>
          <IonIcon slot="end" icon={refresh}></IonIcon>Reset Values
        </IonButton>
        <IonText color="light">
            <h5>&nbsp;&nbsp;&nbsp;&nbsp;* Max fasting time: {maxFastTime} hrs</h5>
            <h5>&nbsp;&nbsp;&nbsp;&nbsp;* Input time should be in 24HR format</h5>
        </IonText>
        <IonText color="light">

        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default FastingCalculator;
