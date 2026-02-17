type Props = {
    description: string;
};

export default function DescriptionBox({ description }: Props) {
    return (
        <div>
            <p>{description}</p>
        </div>
    );
}
