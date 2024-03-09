import React from 'react';

function GenderSelection({ onNext }) {
    const [gender, setGender] = React.useState('');

    const handleSelection = (gender) => {
        setGender(gender);
        onNext();
    };

    return (
        <div>
            
        </div>
    )
}