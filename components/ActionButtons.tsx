"use client";

import { useState } from "react";

type Props = {
    likes: number;
};

function formatNumber(num: number) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num.toString();
}

export default function ActionButtons({ likes }: Props) {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <div className="flex flex-wrap gap-3 py-4 border-b border-zinc-800">

            {/* Like Button */}
            <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition active:scale-95 cursor-pointer
        ${liked
                        ? "bg-blue-900 text-blue-400"
                        : "bg-zinc-700 hover:bg-zinc-600 text-white"
                    }`}
            >
                👍 {formatNumber(likeCount)}
            </button>

            {/* Share Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition active:scale-95 cursor-pointer">
                🔗 Share
            </button>

            {/* Save Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium transition active:scale-95 cursor-pointer">
                💾 Save
            </button>

        </div>
    );
}
