export default function RoadmapPage () {
    return (
        <div>
            <h2 className="Roadmap">Our plan</h2>
            <div className="Text">
                <p>January 2023</p>
                <p>Initial Token Offering</p>
                <p>Publish webbpage</p>
            </div>
            <div className="Text2">
                <p>March 2023</p>
                <p>Launch merch collection</p>
                <p>Launch NFTs</p>
            </div>
            <div className="NavbarBackground">
                <button className="backgroundColorHomeBtn"></button>
                <button className="backgroundColorTeamBtn"></button>
                <button className="backgroundColorRoadmapBtn" style={{ backgroundColor: "rgb(255, 136, 0, 0.1)" }}></button>
                <button className="backgroundColorNftBtn" ></button>
                <button className="backgroundColorMerchBtn"></button>
            </div>
        </div>
    )
  }