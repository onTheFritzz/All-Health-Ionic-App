import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCardHeader, IonInput, IonBackButton, IonButtons } from '@ionic/react';
import FlipCountdown from '@rumess/react-flip-countdown';
import { useStoredState } from '../lib/hooks';
import moment from 'moment';

const PillCounter: React.FC = () => {
  
  const [pills, setPillQty] = useStoredState('Pills', '0')
  const [refillDate, setRefillDate] = useStoredState('Pills-Date', '')

  function getRefillDate(pillsQty) {
    setPillQty(pillsQty)

    let dateModified = new Date()
    let endDate = moment(dateModified).add(pillsQty, 'days').format('MM-DD-YYYY')

    setRefillDate(endDate)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pill Counter</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonInput color="warning" label="Pills:" labelPlacement="fixed" fill="solid"
            value={pills} onIonChange={(event) => getRefillDate(event.detail.value)}></IonInput>
        </IonCard>
        <IonCard color="warning">
          <IonCardHeader>
            <FlipCountdown
                  hideSecond
                  hideYear
                  hideMinute
                  hideHour
                  endAt={refillDate}
            />
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PillCounter;
