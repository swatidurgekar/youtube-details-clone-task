type Props = {
    comments: {
        id: number;
        name: string;
        avatar: string;
        comment: string;
    }[];
};

export default function CommentsSection({ comments }: Props) {
    return (
        <div>
            <h3>{comments.length} Comments</h3>
            {comments.map((c) => (
                <div key={c.id}>
                    <p>{c.name}</p>
                    <p>{c.comment}</p>
                </div>
            ))}
        </div>
    );
}
