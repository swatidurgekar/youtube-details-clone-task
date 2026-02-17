"use client";

import { useState } from "react";

type Props = {
    channel: {
        name: string;
        avatar: string;
        subscribers: string;
    };
};

export default function ChannelInfo({ channel }: Props) {
    const [subscribed, setSubscribed] = useState(false);

    return (
        <div className="flex items-center justify-between py-4 border-b border-zinc-800">
            {/* Left Side */}
            <div className="flex items-center gap-3">
                <img
                    src={channel.avatar}
                    alt={channel.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />

                <div>
                    <h2 className="font-semibold text-sm md:text-base">
                        {channel.name}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600">
                        {channel.subscribers}
                    </p>
                </div>
            </div>

            {/* Subscribe Button */}
            <button
                onClick={() => setSubscribed(!subscribed)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition active:scale-95 cursor-pointer
          ${subscribed
                        ? "bg-white text-black"
                        : "bg-zinc-800 hover:bg-zinc-700 text-white"
                    }`}
            >
                {subscribed ? "Subscribed" : "Subscribe"}
            </button>
        </div>
    );
}
