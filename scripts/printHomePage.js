export default function printHomePage () {
    const homeBtn = document.getElementById("homeBtn")
    const teamBtn = document.getElementById("teamBtn")
    const roadMapBtn = document.getElementById("roadMapBtn")
    const nftBtn = document.getElementById("nftBtn")
    const merchBtn = document.getElementById("merchBtn")

    content.innerHTML = "";
        
    let buyBtn = document.createElement("button");
    buyBtn.innerText = "Buy Dopefish Token";
    buyBtn.id = "buyBtn";
    content.appendChild(buyBtn);

    let img = document.createElement("img");
    img.src = "../img(token.gif";
    img.id = "token";
    content.appendChild(img);

    let textBuy = document.createElement("p");
    textBuy.id = "textBuy";
    textBuy.innerHTML = "Placeholder, explain how to buy Dopefish token";
    content.appendChild(textBuy);

    homeBtn.style.background = "rgb(255, 136, 0, 0.1)";
    teamBtn.style.background = "rgba(0,0,0,0)";
    roadMapBtn.style.background = "rgba(0,0,0,0)";
    nftBtn.style.background = "rgba(0,0,0,0)";
    merchBtn.style.background = "rgba(0,0,0,0)";

    buyBtn.addEventListener("click", () => {
        //länk till köpa token 
    })    

}