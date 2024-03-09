import { useState } from 'react';

// TODO: Start off with the gender, then transition to skin colour and hair.
// if (!authorised || setup) rejectRequest();

function Setup() {
    const [stage, setStage] = userState('gender');

    const nextStage = () => {
        if (stage === 'gender') setStage('skin');
        else if (stage === 'skin') setStage('hair');
    };

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {stage === 'gender' && <GenderSelection onNext={nextStage} />}
        {stage === 'skin' && <SkinSelection onNext={nextStage} />}
        {stage === 'hair' && <HairSelection onNext={nextStage} />}
      </main>
    )
  }

export default Setup