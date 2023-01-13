import tokenImg from "../img/token.gif"

export default function HomePage() {
    return (
      <div>
        <a href="https://app.uniswap.org/#/swap?exactField=input&exactAmount=10&inputCurrency=0x1f9840a85d5af5bf1d1762f925bdaddc4201f984&exactField=output&outputCurrency=0xfCBeBF089d379061c903D986D18193cceD6253FD"
        target="_blank">      
          <button className="buyBtn">Buy Dopefish Token</button>
        </a>
        <img src={tokenImg} className="token" />
        <p className="textBuy">"Placeholder, explain how to buy Dopefish token"</p>
        <div className="NavbarBackground">
          <button className="backgroundColorHomeBtn" style={{ backgroundColor: "rgb(255, 136, 0, 0.1)" }}></button>
          <button className="backgroundColorTeamBtn"></button>
          <button className="backgroundColorRoadmapBtn"></button>
          <button className="backgroundColorNftBtn"></button>
          <button className="backgroundColorMerchBtn"></button>
        </div>
      </div>
    )
}  