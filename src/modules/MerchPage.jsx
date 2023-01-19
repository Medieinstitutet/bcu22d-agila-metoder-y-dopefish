import MerchImg from "/img/Merch.png";
import MerchPoster from "/img/poster.jpg";
import MerchKeps from "/img/keps.png";
import MerchMugg from "/img/mugg.png";

export default function MerchPage() {
  return (
    <div>
      <div className="containerMerchPage">
        <h2 className="Merch">Merch</h2>
        <h1 className="Coming2">COMING SOON!</h1>
        <img src={MerchImg} className="MerchPic" />
        <img src={MerchPoster} className="MerchPoster" />
        <img src={MerchKeps} className="MerchKeps" />
        <img src={MerchMugg} className="MerchMugg" />
      </div>
      <div className="NavbarBackground">
        <button className="backgroundColorHomeBtn"></button>
        <button className="backgroundColorTeamBtn"></button>
        <button className="backgroundColorRoadmapBtn"></button>
        <button className="backgroundColorNftBtn"></button>
        <button
          className="backgroundColorMerchBtn"
          style={{
            backgroundColor: "rgb(255, 136, 0, 0.2)",
            borderRadius: "10px 10px 10px 10px",
          }}
        ></button>
      </div>
    </div>
  );
}
