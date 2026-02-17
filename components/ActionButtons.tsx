type Props = {
    likes: number;
};

export default function ActionButtons({ likes }: Props) {
    return (
        <div>
            <button>👍 {likes}</button>
            <button>🔗 Share</button>
        </div>
    );
}
