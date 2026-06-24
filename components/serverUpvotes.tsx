"use client";
import { useState } from "react";
import { Button } from "./ui/button";

interface ServerUpvotesProps {
    PostId: number;
    votes: number;
}

function ServerUpvotes({ PostId, votes }: ServerUpvotesProps) {
    const [localVotes, setLocalVotes] = useState(votes);

    const handleVote = async () => {
        setLocalVotes((totalVotes) => totalVotes + 1);
        await fetch(`/api/posts/${PostId}`, {
            method: "PATCH",
        });
    };

    return (
        <div className="flex items-center gap-4">
            <Button onClick={handleVote}>Vote {localVotes}</Button>
        </div>
    );
}

export default ServerUpvotes;
