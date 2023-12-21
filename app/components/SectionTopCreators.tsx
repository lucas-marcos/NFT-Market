import TopCreator from "./TopCreator";
import TopCreatorLg from "./TopCreatorLg";

export default function SectionTopCreators() {
    return (
        <div className="pt-16">
            <div className="flex flex-col gap-2 pb-10">
                <h2 className="text-white text-2xl">Top creators</h2>
                <h3 className="text-white text-base">Checkout Top Rated Creators on the NFT Marketplace</h3>
            </div>

            <TopCreator className="lg:hidden"></TopCreator>
            <TopCreatorLg className="hidden lg:grid"></TopCreatorLg>
        </div>
    )
}