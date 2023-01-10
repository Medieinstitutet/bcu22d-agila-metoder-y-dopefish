import BodyImg from "./modules/BodyImg"
import Header from "./modules/Header"
import Footer from "./modules/Footer"
import HomePage from "./modules/HomePage"
import MerchPage from "./modules/MerchPage"
import NftPage from "./modules/NftPage/NftPage"
import RoadmapPage from "./modules/RoadmapPage"
import TeamPage from "./modules/TeamPage"

export default function Page() {
  return (
    <div>
      {/* <BodyImg />
      <Header />
      <HomePage /> */}
      {/* <TeamPage />
      <RoadmapPage /> */}
      <NftPage />
      {/* <MerchPage />
      <Footer /> */}
    </div>
  )
}
