import React from 'react';
import { IonCard, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonPage, IonRow,
  IonTitle, IonToolbar, IonCardHeader, IonCardContent, IonCardTitle, IonIcon, IonButton,
  IonBackButton, IonButtons } from '@ionic/react';
import { useStoredState } from '../lib/hooks';
import { refresh } from 'ionicons/icons';

const FunMoney: React.FC = () => {
  const [hours, setHours] = useStoredState('Wage-Hours', '')
  const [wage, setWage] = useStoredState('Wage', '')
  const [tax, setTax] = useStoredState('Tax', 21)
  const [housing, setHousing] = useStoredState('Housing', '')
  const [transportation, setTransportation] = useStoredState('Transportation', '')
  const [groceries, setGroceries] = useStoredState('Groceries', '')
  const [utilities, setUtilities] = useStoredState('Utilities', '')
  const [entertainment, setEntertainment] = useStoredState('Entertainment', '')
  const [insurance, setInsurance] = useStoredState('Insurance', '')
  const [debt, setDebt] = useStoredState('Debt', '')
  const [misc, setMiscellaneous] = useStoredState('Miscellaneous', '')
  
  function resetValues() {
    setHours('')
    setWage('')
    setTax(21)
    setHousing('')
    setTransportation('')
    setGroceries('')
    setUtilities('')
    setEntertainment('')
    setInsurance('')
    setDebt('')
    setMiscellaneous('')
  }

  const sumBills = sumAllBills()
  const netMoney = (hours * wage * (1 - tax/100)).toFixed(2)
  const funMoney = (parseFloat(netMoney) - sumBills).toFixed(2)

  function sumAllBills() {
    const x = [housing, transportation, groceries, utilities, entertainment, insurance, debt, misc]
    const totalBillCost = x.reduce((partial, x) => partial + Number(x), 0);

    return totalBillCost.toFixed(2)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="warning">Fun Money</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonInput color="warning" label="Hours" labelPlacement="floating" fill="outline"
                  placeholder="Worked" type="number" value={hours} clearInput={true}
                  onIonChange={(event) => setHours(event.detail.value)}>
                </IonInput>
              </IonCol>
              <IonCol>
                <IonInput color="warning" label="Wage" labelPlacement="floating" fill="outline"
                  placeholder="Hourly" type="number" value={wage} clearInput={true}
                  onIonChange={(event) => setWage(event.detail.value)}>
                </IonInput>
              </IonCol>
              <IonCol>
                <IonInput color="warning" label="Tax" labelPlacement="floating" fill="outline"
                  placeholder="Federal/State" clearInput={true} type="number" value={tax}
                  onIonChange={(event) => setTax(event.detail.value)}>
                </IonInput>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle color="warning">Results</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonInput readonly={true} color="warning" label="Net:" labelPlacement="fixed" fill="solid" value={netMoney}></IonInput>
            <IonInput readonly={true} color="warning" label="Total Bills:" labelPlacement="fixed" fill="solid" value={sumBills}></IonInput>
            <IonInput readonly={true} color="warning" label="Fun Money:" labelPlacement="fixed" fill="solid" value={funMoney}></IonInput>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle color="warning">Expenses</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonInput label="Housing" labelPlacement="floating" fill="outline" color="warning"
                    value={housing} type="number" clearInput={true}
                    onIonChange={(event) => setHousing(event.detail.value)}></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput label="Transportation" labelPlacement="floating" fill="outline" color="warning"
                    value={transportation} type="number" clearInput={true}
                    onIonChange={(event) => setTransportation(event.detail.value)}></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonInput label="Groceries" labelPlacement="floating" fill="outline" color="warning"
                    value={groceries} type="number" clearInput={true}
                    onIonChange={(event) => setGroceries(event.detail.value)}></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput label="Utilities" labelPlacement="floating" fill="outline" color="warning"
                    value={utilities} type="number" clearInput={true}
                    onIonChange={(event) => setUtilities(event.detail.value)}></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonInput label="Entertainment" labelPlacement="floating" fill="outline" type="number" value={entertainment}
                  color="warning" clearInput={true} onIonChange={(event) => setEntertainment(event.detail.value)}></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput label="Insurance" labelPlacement="floating" fill="outline" type="number" value={insurance}
                  color="warning" clearInput={true} onIonChange={(event) => setInsurance(event.detail.value)}></IonInput>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonInput label="Debt" labelPlacement="floating" fill="outline" type="number" value={debt}
                  color="warning" clearInput={true} onIonChange={(event) => setDebt(event.detail.value)}></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput label="Miscellaneous" labelPlacement="floating" fill="outline" type="number" value={misc}
                  color="warning" clearInput={true} onIonChange={(event) => setMiscellaneous(event.detail.value)}></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" color="warning" onClick={resetValues}>
          <IonIcon slot="end" icon={refresh}></IonIcon>Reset Values
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
//<IonButton expand="block" color="warning" onClick={clearLocalStorage}>
// expand="block" color="warning">Reset all Values</IonButton>
//{bills.map(bill => <IonInput label={bill.name} value={bill.cost} key={bill.name} onIonChange={(bill) => setBills(bill.detail.value)}></IonInput>)}
//{[{'name': 'xcel', 'cost': 1}, {'name': 'chase', 'cost': 2}, {'name': 'rent', 'cost': 3}].map(title => <p key={title.name}>{title.name}: {title.cost}</p>)}

export default FunMoney;