
interface Props {
    img: string;
    title: string;
    imagemDeCima: string;

}

//criar uma lista de categorias 

const categorias: Props[] = [
    {
        img: "/categoria-1.png",
        title: "Art",
        imagemDeCima: "./PaintBrush.svg"
    },
    {
        img: "/categoria-2.png",
        title: "Collectibles",
        imagemDeCima: "./Swatches.svg"
    },
    {
        img: "/categoria-3.png",
        title: "Music",
        imagemDeCima: "./MusicNotes.svg"
    },
    {
        img: "/categoria-4.png",
        title: "Photography",
        imagemDeCima: "./Camera.svg"
    },
    {
        img: "/categoria-5.png",
        title: "Video",
        imagemDeCima: "./VideoCamera.svg"
    },
    {
        img: "/categoria-6.png",
        title: "Utility",
        imagemDeCima: "./MagicWand.svg"
    },
    {
        img: "/categoria-7.png",
        title: "Sport",
        imagemDeCima: "./Basketball.svg"
    },
    {
        img: "/categoria-8.png",
        title: "Virtual",
        imagemDeCima: "./Planet.svg"
    },
];


function Categoria({ img, title, imagemDeCima }: Props) {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative">
                <img className="blur-sm rounded-t-2xl" src={img} alt="" />
                <img className="rounded-t-2xl absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2" src={imagemDeCima} alt="" />
            </div>

            <div className="w-full bg-secundary rounded-b-2xl p-5">
                <p className="text-white">{title}</p>
            </div>
        </div>
    )
}


export default function BrownserCategoriesSection() {
    return (
        <div className="pt-16">
            <h2 className="pb-16 text-white text-2xl ">Browse Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {categorias.map((categoria) => {
                    return <Categoria img={categoria.img} title={categoria.title} imagemDeCima={categoria.imagemDeCima}></Categoria>
                })}
            </div>
        </div>
    )
}