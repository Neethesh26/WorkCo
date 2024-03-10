import Image from 'next/image';

export default function CharacterIcon({ name }) {
    return (<div className="character-icon w-[50px] h-[50px] overflow-hidden">
        <Image src={`/characters/icons/${name}.png`} alt={name} height={50} width={50} layout="fixed" objectFit="cover"/>
    </div>)
}