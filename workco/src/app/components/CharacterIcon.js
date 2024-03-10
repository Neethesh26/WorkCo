import Image from 'next/image';

export default function CharacterIcon({ name, onClick }) {
    return (<Image src={`/characters/icons/${name}.png`} alt={name} height={125} width={125} onClick={onClick}/>)
}