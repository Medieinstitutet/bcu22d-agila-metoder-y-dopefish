import BodyImg from "./modules/BodyImg"
import Header from "./modules/Header"
import tokenImg from "./img/token.gif"
import Footer from "./modules/Footer"
/* import MerchPage from "./modules/MerchPage"
import TeamPage from "./modules/TeamPage" */

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
