import MerchImg from "../img/Merch.png"

export default function MerchPage () {
    return (
        <div>
            <h2 className="Merch">Merch collection</h2>
            <h1 className="Coming2">COMING SOON!</h1>
            <img src={MerchImg} className="MerchPic" />
            <div className="NavbarBackground">
                <button className="backgroundColorHomeBtn"></button>
                <button className="backgroundColorTeamBtn"></button>
                <button className="backgroundColorRoadmapBtn"></button>
                <button className="backgroundColorNftBtn" ></button>
                <button className="backgroundColorMerchBtn" style={{ backgroundColor: "rgb(255, 136, 0, 0.1)" }}></button>
            </div>
        </div>
    )
  }