interface Props {
    className?: string;
    imagem: string;
    name: string;
    sale: string;
}

export default function CardLg(props: Props) {
    return (
        <div className="bg-secundary  p-7 rounded-2xl relative">
            <div className="flex items-center justify-center bg-[#2B2B2B] opacity-90 rounded-full h-7 w-7 absolute bottom-50 right-80 p-5 text-[#fff]">
                <p>1</p>
            </div>

            <img
                className="w-32 h-32 rounded-full mx-auto mb-5"
                src={props.imagem}
                alt="Avatar"
            />

            <h3 className="text-white text-xl font-medium text-center">{props.name}</h3>

            <div className="mt-2 flex justify-center gap-5">
                <p className="text-gray-400 text-sm">Total Sales:</p>
                <p className="text-white text-sm">{props.sale} ETH</p>
            </div>
        </div>
    );
}