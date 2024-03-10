import CharacterIcon from "@/app/components/CharacterIcon";

export default function Selector() {
    return (<div id="selector">
        <div id="characters" class="grid grid-rows-3 grid-cols-3 gap-4">
            <CharacterIcon name="cat_1" />
            <CharacterIcon name="cat_2" />
            <CharacterIcon name="cat_3" />

            <CharacterIcon name="cat_4" />
            <CharacterIcon name="blathers" />
            <CharacterIcon name="crazy_redd" />

            <CharacterIcon name="isabelle" />
            <CharacterIcon name="mabel_able" />
            <CharacterIcon name="tom_nook" />
        </div>
    </div>)
}