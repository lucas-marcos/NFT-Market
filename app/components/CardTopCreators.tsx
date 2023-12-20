interface Props{
    number:number;
    className?: string;
    imagem: string;
}

export default function CardTopCreators(props: Props) {
    return (
        <div className={`h-100 w-100  ${props.className}`}>
            <div className="flex  bg-secundary rounded-xl p-5 gap-4 items-center">
                <div className="w-16 h-16  flex items-center relative ">
                    <img className="rounded-full" src={props.imagem}></img>
                    <div className="flex items-center justify-center bg-[#2B2B2B] opacity-90 rounded-full h-7 w-7 absolute bottom-8 right-3 p-5 text-[#fff]">
                        <p>{props.number}</p>
                    </div>

                </div>
                <div className="w-full">
                    <h3 className="text-white text-xl">Keepitreal</h3>
                    <div className="flex justify-between">
                        <h5 className="text-gray-400 text-xs h-5 whitespace-nowrap">Total Sales:</h5>
                        <h5 className="text-white text-xs h-5 whitespace-nowrap">
                            34.53 ETH
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}