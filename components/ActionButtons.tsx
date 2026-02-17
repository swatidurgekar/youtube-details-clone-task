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
        <div className="flex flex-wrap gap-3 py-4 border-b">

            {/* Like Button */}
            <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
        ${liked
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 hover:bg-gray-200 text-black"
                    }`}
            >
                👍 {formatNumber(likeCount)}
            </button>

            {/* Share Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200t text-black text-sm font-medium transition">
                🔗 Share
            </button>

            {/* Save Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-black text-sm font-medium transition">
                💾 Save
            </button>

        </div>
    );
}
