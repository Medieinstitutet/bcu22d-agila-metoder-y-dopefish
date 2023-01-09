import BodyImg from "./modules/BodyImg"
import tokenImg from "./img/token.gif"

function Header() {
  return (
    <header className="header">
      <a href="https://discord.com/channels/1060149946612981871/1060149947078557718" target="_blank">Join Dopefish on Discord</a>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <button className="homeBtn">HOME</button>
      <button className="teamBtn">TEAM</button>
      <button className="roadMapBtn">ROADMAP</button>
      <button className="nftBtn">NFTs</button>
      <button className="merchBtn">MERCH</button>
    </footer>
  )
}

export default function HomePage() {
  return (
    <div>
      <BodyImg />
      <Header />
      <button className="buyBtn">Buy Dopefish Token</button>
      <img src={tokenImg} className="token" />
      <p className="textBuy">"Placeholder, explain how to buy Dopefish token"</p>
      <Footer />
    </div>
  )
}

/* function TeamPage () {
  return (

  )
}
function RoadMapPage () {
  return (
      
  )
}
function NftPage () {
  return (
      
  )
}
function MerchPage () {
  return (
      
  )
}
*/



/* ReactDOM.render(
  <div>
      <h1 className="header">Hello</h1>
      <p>Det funkar också ganska bra...</p>
  </div>, 
  document.querySelector("#root")
) */

/* const h1 = document.createElement("h1")
h1.textContent = "Hello"
h1.className = "header"
document.getElementById("root").append(h1) */

