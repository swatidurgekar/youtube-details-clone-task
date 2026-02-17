type Props = {
    data: {
        title: string;
        views: string;
        uploaded: string;
    };
};

export default function VideoTitle({ data }: Props) {
    return (
        <div className="mb-3">
            <h1 className="text-lg md:text-2xl font-semibold leading-snug">
                {data.title}
            </h1>

            <p className="text-sm text-gray-400 mt-1">
                {data.views} • {data.uploaded}
            </p>
        </div>
    );
}
