export default function printNftPage () {
    const content = document.getElementById("content")
    const homeBtn = document.getElementById("homeBtn")
    const teamBtn = document.getElementById("teamBtn")
    const roadMapBtn = document.getElementById("roadMapBtn")
    const nftBtn = document.getElementById("nftBtn")
    const merchBtn = document.getElementById("merchBtn")
    content.innerHTML = "";

    let headline = document.createElement("h2");
    headline.id = "nft";
    headline.innerText = "NFT collection";
    content.appendChild(headline);

    let banner = document.createElement("h1");
    banner.id = "comming1";
    banner.innerText = "COMING SOON!";
    content.appendChild(banner);

    homeBtn.style.background = "rgba(0,0,0,0)";
    teamBtn.style.background = "rgba(0,0,0,0)";
    roadMapBtn.style.background = "rgba(0,0,0,0)";
    nftBtn.style.background = "rgb(255, 136, 0, 0.1)";
    merchBtn.style.background = "rgba(0,0,0,0)";
}