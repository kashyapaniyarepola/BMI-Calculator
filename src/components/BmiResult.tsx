import React from "react";
import { IonCol, IonCard, IonRow, IonCardContent } from "@ionic/react";

const BmiResult: React.FC<{ result: number}> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
            <IonCardContent className="ion-text-center">
                <h2>Yor Body-Mass index</h2>
                <h3 >{props.result.toFixed(2)}</h3>
            </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow> 
  );
};

export default BmiResult;
