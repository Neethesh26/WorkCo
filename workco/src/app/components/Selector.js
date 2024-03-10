import React from 'react';

import CharacterIcon from "@/app/components/CharacterIcon";

export default function Selector({ changeCharacter }) {
    return (<div id="selector">
        <div id="characters" class="grid grid-rows-3 grid-cols-3 gap-1">
            <CharacterIcon name="cat_1" onClick={() => changeCharacter("cat_1")}/>
            <CharacterIcon name="cat_2" onClick={() => changeCharacter("cat_2")}/>
            <CharacterIcon name="cat_3" onClick={() => changeCharacter("cat_3")}/>

            <CharacterIcon name="cat_4" onClick={() => changeCharacter("cat_4")}/>
            <CharacterIcon name="blathers" onClick={() => changeCharacter("blathers")}/>
            <CharacterIcon name="crazy_redd" onClick={() => changeCharacter("crazy_redd")}/>

            <CharacterIcon name="isabelle" onClick={() => changeCharacter("isabelle")}/>
            <CharacterIcon name="mabel_able" onClick={() => changeCharacter("mabel_able")}/>
            <CharacterIcon name="tom_nook" onClick={() => changeCharacter("tom_nook")}/>
        </div>
    </div>)
}