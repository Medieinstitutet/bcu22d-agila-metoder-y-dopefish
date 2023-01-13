import Nft from "./nftPage/modules/Nft"
import nftData from "./nftPage/data/nftData.json"

export default function NftPage() {

    const nfts = nftData.map(nft => {
        return (
            <Nft
                name={nft.name}
                id={nft.id}
                key={nft.id}
            />
        )
    })
    console.log(nfts);
    return (
        <div className="nftPage">
            <h2 className="Nft">NFT collection</h2>
            <h1 className="Coming1">COMING SOON!</h1>
            <div className="nftDiv">
                {nfts}
            </div>
            <div className="NavbarBackground">
                <button className="backgroundColorHomeBtn"></button>
                <button className="backgroundColorTeamBtn"></button>
                <button className="backgroundColorRoadmapBtn"></button>
                <button className="backgroundColorNftBtn" style={{ backgroundColor: "rgb(255, 136, 0, 0.1)" }} ></button>
                <button className="backgroundColorMerchBtn"></button>
            </div>
        </div>
    )
}