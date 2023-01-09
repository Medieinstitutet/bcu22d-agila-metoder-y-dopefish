export default function printRoadMapPage () {
    const homeBtn = document.getElementById("homeBtn")
    const teamBtn = document.getElementById("teamBtn")
    const roadMapBtn = document.getElementById("roadMapBtn")
    const nftBtn = document.getElementById("nftBtn")
    const merchBtn = document.getElementById("merchBtn")

    content.innerHTML = "";

    let headline = document.createElement("h2");
    headline.id = "roadmap";
    headline.innerText = "Our plan";
    content.appendChild(headline);

    let img = document.createElement("img");
    img.src = "../img/Roadmap2.gif";
    img.id = "roadmap2";
    content.appendChild(img);

    let text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "January 2023" + "</br>" + "Initial Token Offering" + "</br>" + "Publish webbpage";
    content.appendChild(text);

    let texte = document.createElement("p");
    texte.id = "texte";
    texte.innerHTML = "March 2023" + "</br>" +"Launch merch collection" + "</br>" + "Launch NFTs";
    content.appendChild(texte);

    homeBtn.style.background = "rgba(0,0,0,0)";
    teamBtn.style.background = "rgba(0,0,0,0)";
    roadMapBtn.style.background = "rgb(255, 136, 0, 0.1)";
    nftBtn.style.background = "rgba(0,0,0,0)";
    merchBtn.style.background = "rgba(0,0,0,0)";
}