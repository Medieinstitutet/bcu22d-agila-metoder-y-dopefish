import React, { useState, useRef } from 'react';

export default function RoadmapPage () {
  const [boxQ1, setBoxQ1] = useState(true);
    const [boxQ2, setBoxQ2] = useState(false);
    const [boxQ3, setBoxQ3] = useState(false);
    const [boxQ4, setBoxQ4] = useState(false);

    const imageRef = useRef(null);

    const handleBoxQ1 = () => {
        setBoxQ1(true);
        setBoxQ2(false);
        setBoxQ3(false);
        setBoxQ4(false);
        moveImageTo(0);
    }
    const handleBoxQ2 = () => {
        setBoxQ1(false);
        setBoxQ2(true);
        setBoxQ3(false);
        setBoxQ4(false);
        moveImageTo(1);
    }
    const handleBoxQ3 = () => {
        setBoxQ1(false);
        setBoxQ2(false);
        setBoxQ3(true);
        setBoxQ4(false);
        moveImageTo(2);
    }
    const handleBoxQ4 = () => {
        setBoxQ1(false);
        setBoxQ2(false);
        setBoxQ3(false);
        setBoxQ4(true);
        moveImageTo(3);
    }

    const moveImageTo = (index) => {
      if (imageRef.current) {
        const circle = document.getElementsByClassName("circle")[index];
        const circleRect = circle.getBoundingClientRect();
        const offset = 40;
        imageRef.current.style.left = `${circleRect.left - offset}px`;
      }
  }



    return (
        <div className="roadmapPage">
          <h1 className="RM">RoadMap</h1>
            <div className="container">
      <div className="line"></div>
      <div className="circle left" onClick={handleBoxQ1}></div>
      <div className="circle middle1" onClick={handleBoxQ2}></div>
      <div className="circle middle2" onClick={handleBoxQ3}></div>
      <div className="circle right" onClick={handleBoxQ4}></div>
      <img src="img/DopeFish-Roadmap.png" className="scrolling-image" ref={imageRef} />
      <div className="box Q1" style={{ display: boxQ1 ? 'block' : 'none' }}>
        <h3>Phase One</h3>
        <div className= "underline"></div>
        <ul>
            <li className="Done">Website Launch</li>
            <li className="Done">Token Launch</li>
            <li className="Done">Discord Launch</li>
            <li className="Done">RoadMap</li>
        </ul>

      </div>
      <div className="box Q2" style={{ display: boxQ2 ? 'block' : 'none' }}>
      <h3>Phase Two</h3>
        <div className= "underline"></div>
      <ul>
            <li>NFT Launch</li>
            <li>Merch Launch</li>
            <li>Instagram/Twitter</li>
        </ul>
      </div>
      <div className="box Q3" style={{ display: boxQ3 ? 'block' : 'none' }}>
      <h3>Phase Three</h3>
        <div className= "underline"></div>
      <ul>
            <li>Marketing Campaign</li>
            <li>Merch 2.0</li>
            <li>Token Staking</li>
        </ul>
      </div>
      <div className="box Q4" style={{ display: boxQ4 ? 'block' : 'none' }}>
      <h3>Phase Four</h3>
        <div className= "underline"></div>
      <ul>
            <li>RoadMap 2.0</li>
            <li>TBA</li>
            <li>TBA</li>
        </ul>
      </div>
    </div>
            <div className="NavbarBackground">
                <button className="backgroundColorHomeBtn"></button>
                <button className="backgroundColorTeamBtn"></button>
                <button className="backgroundColorRoadmapBtn" style={{ backgroundColor: "rgb(255, 136, 0, 0.2)", borderRadius:"10px 10px 10px 10px" }}></button>
                <button className="backgroundColorNftBtn" ></button>
                <button className="backgroundColorMerchBtn"></button>
            </div>
        </div>
    )
  }

