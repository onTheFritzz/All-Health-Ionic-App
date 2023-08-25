import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonCardHeader, IonInput, IonBackButton, IonButtons } from '@ionic/react';
import FlipCountdown from '@rumess/react-flip-countdown';
import { useStoredState } from '../lib/hooks';
import moment from 'moment';

//{`${moment().add(`${pillDate}`, 'days').format('L').replaceAll('/', '-')}`}
//{`${date.addDays(`${pillDate}`)}`}

const PillCounter: React.FC = () => {
  const [pillDate, setPillDate] = useStoredState('Pills', '10')

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
           value={pillDate} onIonChange={(event) => setPillDate(event.detail.value)}></IonInput>
        </IonCard>
        <IonCard color="warning">
          <IonCardHeader>
            <FlipCountdown
                  hideSecond
                  hideYear
                  hideMinute
                  hideHour
                  endAt={`${moment().add(`${pillDate}`, 'days').format('L').replaceAll('/', '-')}`} // Date/Time
            />
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PillCounter;
