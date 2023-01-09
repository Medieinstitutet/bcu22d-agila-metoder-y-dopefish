import printHomePage from "./printHomePage.js";
import printTeamPage from "./printTeamPage.js";
import printRoadMapPage from "./printRoadMapPage.js";
import printNftPage from "./printNftPage.js";
import printMerchPage from "./printMerchPage.js";

const content = document.getElementById("content")
const homeBtn = document.getElementById("homeBtn")
const teamBtn = document.getElementById("teamBtn")
const roadMapBtn = document.getElementById("roadMapBtn")
const nftBtn = document.getElementById("nftBtn")
const merchBtn = document.getElementById("merchBtn")

printHomePage();

homeBtn.addEventListener ("click", () => {
    content.innerHTML = "";
    printHomePage();
})

teamBtn.addEventListener ("click", () => {
    content.innerHTML = "";
    printTeamPage();
})

roadMapBtn.addEventListener ("click", () => {
    content.innerHTML = "";
    printRoadMapPage();
})

nftBtn.addEventListener ("click", () => {
    content.innerHTML = "";
    printNftPage();
})

merchBtn.addEventListener ("click", () => {
    content.innerHTML = "";
    printMerchPage();
})
