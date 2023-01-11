import tokenImg from "../img/token.gif"

export default function HomePage() {
    return (
      <div>      
        <button className="buyBtn">Buy Dopefish Token</button>
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