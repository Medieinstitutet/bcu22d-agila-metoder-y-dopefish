import React from 'react'
import Header from "./modules/Header"
import HomePage from "./modules/HomePage"
import MerchPage from "./modules/MerchPage"
import NftPage from "./modules/NftPage"
import RoadmapPage from "./modules/RoadmapPage"
import TeamPage from "./modules/TeamPage"

export default function Page() {

  const [showPage, setShowPage] = React.useState(<HomePage />)

  function clickHome() {
    setShowPage(<HomePage />)
  }
  function clickTeam() {
    setShowPage(<TeamPage />)
  }
  function clickRoadmap() {
    setShowPage(<RoadmapPage />)
  }
  function clickNft() {
    setShowPage(<NftPage />)
  }
  function clickMerch() {
    setShowPage(<MerchPage />)
  }

  return (
    <div>
      <Header />
      <div>
        {showPage}
      </div>
      <nav className="Navbar">
        <button onClick={clickHome} className="homeBtn">HOME</button>
        <button onClick={clickTeam} className="teamBtn">TEAM</button>
        <button onClick={clickRoadmap} className="roadMapBtn">ROADMAP</button>
        <button onClick={clickNft} className="nftBtn">NFTs</button>
        <button onClick={clickMerch} className="merchBtn">MERCH</button>
      </nav>
    </div>
  )
}
