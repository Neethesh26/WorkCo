'use client'

import React, { useState } from 'react';

import Character from '@/app/components/Character'
import Selector from '@/app/components/Selector'

export default function Setup() {
    const [name, setName] = useState('cat_1');
    function changeCharacter(name) {
        setName(name);
    }

    return (
        <div class="flex justify-center">
            <Character name={name}/>
            <Selector changeCharacter={changeCharacter}/>
        </div>
    )
}