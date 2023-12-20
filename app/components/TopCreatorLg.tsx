import CardLg from "./CargLg";

interface Props {
    className?: string;
}

export default function TopCreatorLg(props: Props) {
    return (
        <div className={`${props.className} grid grid-cols-4 gap-7`}>
            <CardLg imagem={'/top-creators-1.png'} sale="34.53" name="Keepitreal"/>
            <CardLg imagem={'/top-creators-2.png'} sale="34.53" name="DigiLab"/>
            <CardLg imagem={'/top-creators-3.png'} sale="34.53" name="GravityOne"/>
            <CardLg imagem={'/top-creators-4.png'} sale="34.53" name="BlueWhale"/>
            <CardLg imagem={'/top-creators-5.png'} sale="34.53" name="Juanie"/>
            <CardLg imagem={'/top-creators-1.png'} sale="34.53" name="Mr Fox"/>
            <CardLg imagem={'/top-creators-2.png'} sale="34.53" name="Robotica"/>
            <CardLg imagem={'/top-creators-3.png'} sale="34.53" name="RustyRobot"/>
            <CardLg imagem={'/top-creators-4.png'} sale="34.53" name="Animakid"/>
            <CardLg imagem={'/top-creators-2.png'} sale="34.53" name="Ghiblier"/>
            <CardLg imagem={'/top-creators-5.png'} sale="34.53" name="Dotgu"/>
            <CardLg imagem={'/top-creators-1.png'} sale="34.53" name="Ghiblier"/>
        </div>
    )
}