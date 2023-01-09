export default function printTeamPage () {
    const homeBtn = document.getElementById("homeBtn")
    const teamBtn = document.getElementById("teamBtn")
    const roadMapBtn = document.getElementById("roadMapBtn")
    const nftBtn = document.getElementById("nftBtn")
    const merchBtn = document.getElementById("merchBtn")

    content.innerHTML = "";

    let headline = document.createElement("h2");
    headline.id = "team";
    headline.innerText = "The team";
    content.appendChild(headline);

    let img = document.createElement("img");
    img.src = "../img/Dev.1.png";
    img.id = "dev1pic";
    content.appendChild(img);

    let pic = document.createElement("img");
    pic.src = "../img/Dev.2.png";
    pic.id = "dev2pic";
    content.appendChild(pic);

    let devimg = document.createElement("img");
    devimg.src = "../img/Dev.3.png";
    devimg.id = "dev3pic";
    content.appendChild(devimg);

    let devpic = document.createElement("img");
    devpic.src = "../img/Dev.4.png";
    devpic.id = "dev4pic";
    content.appendChild(devpic);

    let textDev1 = document.createElement("p");
    textDev1.id = "textDev1";
    textDev1.innerHTML = "Mr O";
    content.appendChild(textDev1);

    let textDev1a = document.createElement("p");
    textDev1a.id = "textDev1a";
    textDev1a.innerHTML = "Developer" + "</br>" + "Co-founder";
    content.appendChild(textDev1a);

    let textDev1b = document.createElement("p");
    textDev1b.id = "textDev1b";
    textDev1b.innerHTML = "<i class='fa-brands fa-github'></i> " + " <i class='fa-brands fa-linkedin'>";
    content.appendChild(textDev1b);

    let textDev2 = document.createElement("p");
    textDev2.id = "textDev2";
    textDev2.innerHTML = "Ms Z";
    content.appendChild(textDev2);

    let textDev2a = document.createElement("p");
    textDev2a.id = "textDev2a";
    textDev2a.innerHTML = "Developer" + "</br>" + "Co-founder"; 
    content.appendChild(textDev2a);

    let textDev2b = document.createElement("p");
    textDev2b.id = "textDev2b";
    textDev2b.innerHTML = "<i class='fa-brands fa-github'></i> " + " <i class='fa-brands fa-linkedin'>";
    content.appendChild(textDev2b);

    let textDev3 = document.createElement("p");
    textDev3.id = "textDev3";
    textDev3.innerHTML = "Mr J";
    content.appendChild(textDev3);

    let textDev3a = document.createElement("p");
    textDev3a.id = "textDev3a";
    textDev3a.innerHTML = "Developer" + "</br>" + "Co-founder";
    content.appendChild(textDev3a);

    let textDev3b = document.createElement("p");
    textDev3b.id = "textDev3b";
    textDev3b.innerHTML = "<i class='fa-brands fa-github'></i> " + " <i class='fa-brands fa-linkedin'>";
    content.appendChild(textDev3b);

    let textDev4 = document.createElement("p");
    textDev4.id = "textDev4";
    textDev4.innerHTML = "Mr E";
    content.appendChild(textDev4);

    let textDev4a = document.createElement("p");
    textDev4a.id = "textDev4a";
    textDev4a.innerHTML = "Developer" + "</br>" + "Co-founder";
    content.appendChild(textDev4a);

    let textDev4b = document.createElement("p");
    textDev4b.id = "textDev4b";
    textDev4b.innerHTML = "<i class='fa-brands fa-github'></i> " + " <i class='fa-brands fa-linkedin'>";
    content.appendChild(textDev4b);

    homeBtn.style.background = "rgba(0,0,0,0)";
    teamBtn.style.background = "rgb(255, 136, 0, 0.1)";
    roadMapBtn.style.background = "rgba(0,0,0,0)";
    nftBtn.style.background = "rgba(0,0,0,0)";
    merchBtn.style.background = "rgba(0,0,0,0)";
}