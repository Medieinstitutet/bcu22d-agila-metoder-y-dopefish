
export default function Nft(props) {
    //console.log(props);
    return (
        <div className="nft">
            <h1>{props.name}</h1>
            <img src={`/img/nftImages/${props.id}.png`}></img>
            <p>{props.description}</p>
            <p>Mint price: {props.price}</p>
        </div>
    )
}