"use client";

import { useEffect, useState } from "react";

type Comment = {
    id: number;
    name: string;
    avatar: string;
    comment: string;
};

type Props = {
    comments: Comment[];
};

export default function CommentsSection({ comments }: Props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800); // loading

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">
                    Loading comments...
                </h3>
                <div className="space-y-3">
                    <div className="h-10 bg-zinc-800 rounded animate-pulse"></div>
                    <div className="h-10 bg-zinc-800 rounded animate-pulse"></div>
                </div>
            </div>
        );
    }

    if (comments.length === 0) {
        return (
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">0 Comments</h3>
                <p className="text-gray-400">Be the first to comment.</p>
            </div>
        );
    }

    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">
                {comments.length} Comments
            </h3>

            <div className="space-y-5">
                {comments.slice(0, 3).map((c) => (
                    <div key={c.id} className="flex gap-3">
                        <img
                            src={c.avatar}
                            alt={c.name}
                            className="w-9 h-9 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-sm font-medium">{c.name}</p>
                            <p className="text-sm text-gray-300 mt-1">
                                {c.comment}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
