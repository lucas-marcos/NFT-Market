import Navbar from "./components/navbar";
import { Rocket } from 'lucide-react';
import AddicionalFunc from "./components/AdditionalInfo";
import TrendCollectionImagens from "./components/TrendCollectionImagens";
import SectionTopCreators from "./components/SectionTopCreators";
import BrownserCategoriesSection from "./components/BrownserCategoriesSection";

function GetStartedButton() {
  return (
    <div>
      <button className="bg-purple rounded-xl px-11 py-5 text-white w-full flex gap-3 mt-10 justify-center lg:px-11 lg:w-min whitespace-nowrap">
        <Rocket color="#ffffff" strokeWidth={0.9} />
        Get Started
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-10 lg:px-28">

        <section className="grid grid-cols-1 md:grid-cols-2 py-20 lg:gap-5 lg:items-start">
          <div className="py-10 md:py-0 flex md:flex-col md:items-start ">
            <div className="lg:w-[32rem] md:w-80">
              <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-white">Discover digital art & Collect NFTs</h1>
              <h2 className="text-white mt-5">
                NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
              </h2>
            </div>

            <div className="hidden md:inline-block">
              {GetStartedButton()}
            </div>
            <div className="hidden md:inline-block pt-10 justify-between w-full h-full pr-20">
              <AddicionalFunc></AddicionalFunc>
            </div>
          </div>

          <div className="w-76 h-76 lg:w-[32rem] md:w-96 md:h-96">
            <img src={"/space-walking.png"} alt=""></img>
            <div className="bg-secundary rounded-b-2xl p-5 flex flex-col gap-3">
              <h3 className="text-white text-2xl font-bold">Space Walking</h3>
              <div className="h-6 w-6 flex gap-5">
                <img src={'/avatar.png'} alt=""></img>
                <p className="text-white">Animakid</p>
              </div>
            </div>
          </div>

          <div>
          </div>
          <div className="md:hidden">
            {GetStartedButton()}
            <div className="pt-10">
              <AddicionalFunc></AddicionalFunc>
            </div>

          </div>
        </section>

        <section>
          <div className="py-5">
            <div className="flex flex-col gap-2 pb-10">
              <h2 className="text-white text-2xl">Trending Collection</h2>
              <h3 className="text-white text-base">Checkout our weekly updated trending collection.</h3>
            </div>

            <div className="flex gap-7 lg:gap-20">
              <div >
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
        </section>

        <section >
          <SectionTopCreators />
        </section>

        <section>
          <BrownserCategoriesSection/>
        </section>
      </div >
    </div >
  )
}
