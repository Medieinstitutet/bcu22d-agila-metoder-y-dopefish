import tokenImg from "../img/token.gif"

export default function HomePage() {
    return (
      <div>      
        <button className="buyBtn">Buy Dopefish Token</button>
        <img src={tokenImg} className="token" />
        <p className="textBuy">"Placeholder, explain how to buy Dopefish token"</p>
      </div>
    )
  }