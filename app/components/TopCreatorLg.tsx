import CardLg from "./CargLg";

interface Props {
    className?: string;
}

export default function TopCreatorLg(props: Props) {
    return (
        <div className={`${props.className} grid grid-cols-4 gap-7`}>
            <CardLg />
            <CardLg />
            <CardLg />
            <CardLg />
            <CardLg />
            <CardLg />
            <CardLg />
            <CardLg />
        </div>
    )
}