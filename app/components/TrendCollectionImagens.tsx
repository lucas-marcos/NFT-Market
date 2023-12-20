interface Props {
    imagem1: string;
    imagem2: string;
    imagem3: string;
    qtdImagens: string;
}

export default function TrendCollectionImagens(props: Props) {
    return (
        <div className="flex flex-col gap-4">
            <div >
                <img src={props.imagem1} className="rounded-lg" alt=""></img>
            </div>

            <div className="flex gap-3 w-full h-full">
                <div className="w-1/3 h-full">
                    <img className="rounded-lg " src={props.imagem2} alt=""></img>
                </div>

                <div className="w-1/3 h-full">
                    <img className="rounded-lg " src={props.imagem3} alt=""></img>
                </div>

                <div className="flex flex-col w-1/3 bg-purple rounded-lg text-center justify-center align-center">
                    <p className="text-white m-0">{props.qtdImagens}+</p>
                </div>
            </div>

            <div className="">
                <h3 className="text-white text-xl">DSGN Animals</h3>
                <div className="flex gap-3 items-center">
                    <div className="h-6 w-6">
                        <img className="rounded-full" src="/avatar-fox.png"></img>
                    </div>
                    <p className="text-white text-xs leading-6">MrFox</p>
                </div>
            </div>
        </div>
    );
}