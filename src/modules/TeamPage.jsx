import Dev1Img from "/img/Dev1.png"
import Dev2Img from "/img/Dev2.png"
import Dev3Img from "/img/Dev3.png"
import Dev4Img from "/img/Dev4.png"

export default function TeamPage () {
    return (
        <div>
            <h2 className="team">The team</h2>
            <img src={Dev1Img} className="Dev1pic" />
            <p className="textDev1">Mr O</p>
            <p className="textDev1a">Developer<br></br>Co-founder</p>
            <p className="textDev1b"><i class="fa-brands fa-github"></i> <i class="fa-brands fa-linkedin"></i></p>
            <img src={Dev2Img} className="Dev2pic" />
            <p className="textDev2">Ms Z</p>
            <p className="textDev2a">Developer<br></br>Co-founder</p>
            <p className="textDev2b"><i class="fa-brands fa-github"></i> <i class="fa-brands fa-linkedin"></i></p>
            <img src={Dev3Img} className="Dev3pic" />
            <p className="textDev3">Mr J</p>
            <p className="textDev3a">Developer<br></br>Co-founder</p>
            <p className="textDev3b"><i class="fa-brands fa-github"></i> <i class="fa-brands fa-linkedin"></i></p>
            <img src={Dev4Img} className="Dev4pic" />
            <p className="textDev4">Mr E</p>
            <p className="textDev4a">Developer<br></br>Co-founder</p>
            <p className="textDev4b"><i class="fa-brands fa-github"></i> <i class="fa-brands fa-linkedin"></i></p>
            <div className="NavbarBackground">
                <button className="backgroundColorHomeBtn"></button>
                <button className="backgroundColorTeamBtn" style={{ backgroundColor: "rgb(255, 136, 0, 0.2)", borderRadius:"10px 10px 10px 10px" }}></button>
                <button className="backgroundColorRoadmapBtn"></button>
                <button className="backgroundColorNftBtn"></button>
                <button className="backgroundColorMerchBtn"></button>
            </div>
        </div>
    )
  }