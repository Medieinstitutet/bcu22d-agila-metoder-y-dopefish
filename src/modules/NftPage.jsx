import Nft from "./nftPage/modules/Nft"
import nftData from "./nftPage/data/nftData.json"
import React, { useEffect, useState } from "react";

export default function NftPage() {

    function getNumberOfNfts(width) {
        if (width <= 813) {
            return 1
        }
        else if (width <= 1250) {
            return 2
        }
        else {
            return 3
        }
    }

    const [numberOfNfts, setNumberOfNfts] = useState(() => {
        let num = getNumberOfNfts(window.innerWidth);
        return num
    })

    const handleResize = () => {
        setNumberOfNfts(() => {
            let num = getNumberOfNfts(window.innerWidth);
            setStart(0)
            setEnd(num)
            return num
        })
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, [])

    const [data, setData] = useState(nftData)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(numberOfNfts)

    const nfts = data.slice(start, end).map(nft => {
        // console.log(start, end);
        return (
            <Nft
                name={nft.name}
                description={nft.description}
                price={nft.price}
                id={nft.id}
                key={nft.id}
            />
        )
    })

    function nextNfts() {
        if (end <= (data.length - numberOfNfts)) {
            setStart(prevValue => prevValue + numberOfNfts)
            setEnd(prevValue => prevValue + numberOfNfts)
        } else if (data.length % numberOfNfts != 0 && end < data.length) {
            setStart(end)
            setEnd(data.length)
        }
    }

    function prevNfts() {

        if ((end - start) != numberOfNfts) {
            setEnd(data.length - 1)
            setStart(data.length - 1 - numberOfNfts)
        }
        else
            if (start >= numberOfNfts) {
                setStart(prevValue => prevValue - numberOfNfts)
                setEnd(prevValue => prevValue - numberOfNfts)
            }
    }

    return (
        <div className="nftPage">
            <h2 className="Nft">NFT collection</h2>
            <h1 className="Coming1">COMING SOON!</h1>
            <div className="nftDiv">
                {nfts}
            </div>
            <button onClick={prevNfts} className="nftBtn">Previous</button>
            <button onClick={nextNfts} className="nftBtn">Next</button>
        </div>
    )
}