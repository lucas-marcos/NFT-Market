import TrendCollectionImagens from "./TrendCollectionImagens";

export default function SectionTrending() {
    return (
        <div className="">
            <div className="flex flex-col gap-2 pb-10">
                <h2 className="text-white text-2xl">Trending Collection</h2>
                <h3 className="text-white text-base">Checkout our weekly updated trending collection.</h3>
            </div>

            {/* <div className="flex  w-76 h-72 md:w-full md:h-full gap-7 lg:gap-20"> */}
            <div className="flex w-76 h-72 md:w-full md:h-full gap-7 lg:gap-20">
                <div className="">
                    <TrendCollectionImagens imagem1="/imagem1.png" imagem2="/imagem2.png" imagem3="/imagem3.png" qtdImagens="1025"></TrendCollectionImagens>
                </div>
                <div className="hidden md:inline-block">
                    <TrendCollectionImagens imagem1="/imagem4.png" imagem2="/imagem5.png" imagem3="/imagem6.png" qtdImagens="6"></TrendCollectionImagens>
                </div>
                <div className="hidden lg:inline-block">
                    <TrendCollectionImagens imagem1="/imagem7.png" imagem2="/imagem8.png" imagem3="/imagem9.png" qtdImagens="1025"></TrendCollectionImagens>
                </div>
            </div>
        </div>
    )
}