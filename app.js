//Movement Animation to happen
const card = document.querySelector("#card");
const article = document.querySelector("article");
const img = document.querySelector("img");
const h1 = document.querySelector("h1");

//Moving Animation Event
article.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
article.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    card.style.background =  "linear-gradient(60deg, " 
    + "silver 50%"
    + ", " 
    + "orange 50%"
    + ")";

    img.style.transform = "translateZ(280px)";
    h1.style.transform = "translateY(36px) translateZ(150px)";
})

//Animate Out
article.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.background = "hotpink"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    img.style.transform = "translate(0px)";
    h1.style.transform = "translateZ(0px)";
})
