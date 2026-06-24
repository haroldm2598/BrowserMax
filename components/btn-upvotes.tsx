"use client";
import { useState } from "react";
import { Button } from "./ui/button";

function BtnUpVotes() {
    const [votes, setVotes] = useState(0);

    const AddBtn = () => {
        setVotes((currentVotes) => currentVotes + 1);
    };

    const SubBtn = () => {
        setVotes((currentVotes) => {
            return currentVotes === 0 ? 0 : currentVotes - 1;
        });
    };

    return (
        // <Button onClick={() => setVotes((currentVotes) => currentVotes + 1)}>Current Votes {votes}</Button>
        <div className="flex items-center gap-4">
            <Button onClick={SubBtn}>Minus</Button>
            <p>{votes}</p>
            <Button onClick={AddBtn}>Add</Button>
        </div>
    );
}

export default BtnUpVotes;
