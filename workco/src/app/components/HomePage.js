'use client'

import { getAuth } from "firebase/auth";
import { navigate } from "@/app/actions/redirect";
import { useState } from "react";

export default function HomePage() {
    const hostBtnClick = () => {
        const uuid = getAuth().currentUser.uid;
        navigate(`/room/${uuid}`);
    };

    const [joinClicked, setJoinClicked] = useState(false);
    const joinBtnClick = () => {
        setJoinClicked(true);
    };

    const [code, setCode] = useState("");
    const codeSubmit = (event) => {
        event.preventDefault();
        navigate(`/room/${code}`);
    };

    return (
        <div className={`flex ${joinClicked ? 'justify-center' : 'justify-between'} items-center h-screen px-[800px]`}>
            {!joinClicked &&
            <>
            <button className="bg-green-600 p-8" onClick={hostBtnClick}>Host Room</button>
            <button className="bg-red-600 p-8" onClick={joinBtnClick}>Join Room</button>
            </>
            }
            {joinClicked && (
                <form onSubmit={codeSubmit}>
                    <input type="text" placeholder="Enter room code" className="p-4" value={code} onChange={(e) => setCode(e.target.value)}/>
                    <button type="submit" className="bg-transparent font-semibold border p-4">Go</button>
                </form>
            )}
        </div>
    );
}