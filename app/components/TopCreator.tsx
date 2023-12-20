import CardTopCreators from "./CardTopCreators";

interface Props {
    className?: string;
}

export default function TopCreator(props: Props) {
    return (
        <div className={`py-5 lg:px-28 ${props.className}`}>


            <div className="grid md:grid-cols-2 gap-5">
                <CardTopCreators number={1} imagem={'/top-creators-1.png'}></CardTopCreators>
                <CardTopCreators number={2} imagem={'/top-creators-2.png'}></CardTopCreators>
                <CardTopCreators number={3} imagem={'/top-creators-3.png'}></CardTopCreators>
                <CardTopCreators number={4} imagem={'/top-creators-4.png'}></CardTopCreators>
                <CardTopCreators number={5} imagem={'/top-creators-5.png'}></CardTopCreators>
                <CardTopCreators number={6} className="hidden md:inline-block" imagem={'/avatar-fox.png'}></CardTopCreators>
            </div>

        </div>

    );
}
