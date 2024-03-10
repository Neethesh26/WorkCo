'use client'

export default function Character({ name }) {
    console.log(`Loaded: ${name}`)
    const filepath = `/characters/models/${name}.glb`;
    return (<div id="character">
        {name}
    </div>)
}