import Nft from "./modules/Nft"
import nftData from "./data/nftData.json"
import React, { useEffect, useState } from "react";

export default function NftPage() {

    //Hook
    // function getWidth() {
    //     // Initialize state with undefined width/height so server and client renders match
    //     // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    //     const [width, setWidth] = useState(undefined);
    //     useEffect(() => {
    //         // Handler to call on window resize
    //         function handleResize() {
    //             // Set window width/height to state
    //             setWidth(window.innerWidth);
    //         }
    //         // Add event listener
    //         window.addEventListener("resize", handleResize);
    //         // Call handler right away so state gets updated with initial window size
    //         handleResize();
    //         // Remove event listener on cleanup
    //         return () => window.removeEventListener("resize", handleResize);
    //     }, []); // Empty array ensures that effect is only run on mount
    //     return width;
    // }

    // let width = getWidth()
    // console.log(width);

    // const [width, setWidth] = useState(window.innerWidth);
    // const handleResize = () => {
    //     // Set window width/height to state
    //     setWidth(window.innerWidth);
    //     // console.log(width);
    //     // console.log(window.innerWidth);
    //     // setNumberOfNfts(getNumberOfNfts(width))
    // }

    // useEffect(() => {
    //     window.addEventListener("resize", handleResize)
    // }, [])



    // le width = useWindowSize()
    // console.log("width", width);


    // const [numberOfNfts, setNumberOfNfts] = useState(3);
    // console.log(numberOfNfts);
    // const [width, setWidth] = useState(size);
    // console.log("LSKJDFLKJSD", width);

    function getNumberOfNfts(width) {
        if (width <= 813) {
            // setNumberOfNfts(1)
            console.log("number 1");
            return 1
        }
        else if (width <= 1250) {
            // setNumberOfNfts(2)
            console.log("number 2");
            return 2
        }
        else {
            console.log("number 3");
            // setNumberOfNfts(3)
            return 3
        }


        //     // return setNumberOfNfts(2)
        //     // //return 3
    }



    //const numberOfNfts = getNumberOfNfts(size.width);

    // getNumberOfNfts(size.width)

    // let start = 0;
    // let end = numberOfNfts;

    // let width = 200;
    // setWidth({ value: 500 })
    //getNumberOfNfts(width)


    const [numberOfNfts, setNumberOfNfts] = useState(() => {
        let num = getNumberOfNfts(window.innerWidth);
        return num
    })



    const handleResize = () => {
        // Set window width/height to state
        // setWidth(window.innerWidth);
        // console.log(width);
        // console.log(window.innerWidth);
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



    // getNumberOfNfts(width)


    //let numberOfNfts = 1;


    const [data, setData] = useState(nftData)
    // const [pagination, setPagination] = useState({ start: start, end: end })

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(numberOfNfts)

    //SETEND START+NUMBEROFNFTS

    const nfts = data.slice(start, end).map(nft => {
        console.log(start, end);
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
            // start += numberOfNfts
            // end += numberOfNfts
            // setPagination({ start: start, end: end })
            // console.log(start);
            // console.log(end);
            // console.log("page.end", pagination.end);
        }
    }

    function prevNfts() {
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