import Nft from "./modules/Nft"
import nftData from "./data/nftData.json"

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
        </div>
    )
}