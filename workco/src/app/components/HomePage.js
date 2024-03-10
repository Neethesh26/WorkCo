'use client'

import { getAuth } from "firebase/auth";
import { navigate } from "@/app/actions/redirect";
import { useState } from "react";
import FriendList from "./FriendList";

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
        <>
            <div className={`flex ${joinClicked ? 'justify-center' : 'justify-between'} items-center h-screen px-[800px]`}>
                {!joinClicked &&
                <>
                <button className="bg-blue-400 rounded-md p-8" onClick={hostBtnClick}>Host Room</button>
                <button className="bg-purple-500 rounded-md p-8" onClick={joinBtnClick}>Join Room</button>
                </>
                }
                {joinClicked && (
                    <FriendList />
                )}
            </div>
        </>
    );
}