"use client";

import { useState } from "react";

type Props = {
    description: string;
};

export default function DescriptionBox({ description }: Props) {
    const [expanded, setExpanded] = useState(false);

    const truncatedText = description.slice(0, 150);

    return (
        <div className="bg-zinc-900 rounded-xl p-4 mt-4 text-sm text-gray-200">
            <p className="whitespace-pre-line">
                {expanded ? description : `${truncatedText}...`}
            </p>

            <button
                onClick={() => setExpanded(!expanded)}
                className="mt-2 font-medium text-gray-300 hover:text-white cursor-pointer"
            >
                {expanded ? "Show less" : "more..."}
            </button>
        </div>
    );
}
