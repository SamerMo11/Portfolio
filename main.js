window.addEventListener("scroll", function () {
    let e = document.querySelectorAll(".section"),
        t = document.querySelectorAll(".nav-link"),
        o = "";
    e.forEach((e) => {
        let t = e.offsetTop;
        this.window.scrollY >= t - 120 && (o = e.getAttribute("id"));
    }),
        t.forEach((e) => {
            e.classList.remove("active"), e.getAttribute("href") === `#${o}` && e.classList.add("active");
        });
});
const toggle = document.querySelector(".toggle"),
    nav = document.querySelector(".nav"),
    extra = document.querySelectorAll(".extra");
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active"),
        nav.classList.contains("show") ? (nav.classList.remove("show"), nav.classList.add("hide")) : (nav.classList.remove("hide"), nav.classList.add("show")),
        extra.forEach((e) => {
            e.classList.contains("show") ? (e.classList.remove("show"), e.classList.add("hide")) : (e.classList.remove("hide"), e.classList.add("show"));
        });
});
const colors = document.querySelectorAll(".color"),
    moonn = document.getElementById("moon"),
    sunn = document.getElementById("sun"),
    savedClasses = localStorage.getItem("selectedClasses") || "",
    savedTheme = localStorage.getItem("theme") || "moon";
(document.body.className = savedClasses), (moonn.style.display = "moon" === savedTheme ? "block" : "none"), (sunn.style.display = "sun" === savedTheme ? "block" : "none");
const updateLocalStorage = () => {
    localStorage.setItem("selectedClasses", document.body.className), localStorage.setItem("theme", "block" === moonn.style.display ? "moon" : "sun");
};
colors.forEach((e) => {
    e.addEventListener("click", () => {
        (document.body.className = document.body.className.replace(/color\d+/g, "")), document.body.classList.add(e.classList[1]), updateLocalStorage();
    });
}),
    moonn.addEventListener("click", () => {
        document.body.classList.remove("light"), (moonn.style.display = "none"), (sunn.style.display = "block"), updateLocalStorage();
    }),
    sunn.addEventListener("click", () => {
        document.body.classList.add("light"), (sunn.style.display = "none"), (moonn.style.display = "block"), updateLocalStorage();
    });
const tab = document.querySelector(".theme"),
    moods = document.querySelector(".moods .content");
tab.addEventListener("click", () => {
    moods.classList.contains("moodon") ? (moods.classList.remove("moodon"), moods.classList.add("moodoff")) : (moods.classList.remove("moodoff"), moods.classList.add("moodon"));
});
let arr = document.getElementById("arrow");
function reveal() {
    for (var e = document.querySelectorAll(".reveal"), t = 0; t < e.length; t++) {
        let o = window.innerHeight,
            s;
        e[t].getBoundingClientRect().top < o - 150 ? e[t].classList.add("active") : e[t].classList.remove("active");
    }
}
function bottom() {
    for (var e = document.querySelectorAll(".bottom"), t = 0; t < e.length; t++) {
        let o = window.innerHeight,
            s;
        e[t].getBoundingClientRect().top < o - 150 ? e[t].classList.add("active") : e[t].classList.remove("active");
    }
}
function left() {
    for (var e = document.querySelectorAll(".left"), t = 0; t < e.length; t++) {
        let o = window.innerHeight,
            s;
        e[t].getBoundingClientRect().top < o - 150 ? e[t].classList.add("active") : e[t].classList.remove("active");
    }
}
function right() {
    for (var e = document.querySelectorAll(".right"), t = 0; t < e.length; t++) {
        let o = window.innerHeight,
            s;
        e[t].getBoundingClientRect().top < o - 150 ? e[t].classList.add("active") : e[t].classList.remove("active");
    }
}
function skills() {
    let k = document.querySelector(".skills .cards ");
    [
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>`,
            title: "html"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path></svg>`,
            title: "css"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>`,
            title: "javaScript"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z"></path></svg>`,
            title: "sass"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"></path></svg>`,
            title: "bootstrap"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>`,
            title: "tailwand cSS"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>`,
            title: "react.js"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path></svg>`,
            title: "framer motion"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path></svg>`,
            title: "github"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"></path></svg>`,
            title: "styled components"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>`,
            title: "responsive design"},
        { 
            icon: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"></path><path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"></path></svg>`,
            title: "web performance optimization"},
    ].forEach((s) => {
        k.innerHTML += `
        
                <div class="skillCard">
                ${s.icon}
                <p class="info"> ${s.title} </p>
                </div>
          `;
    });
}
function servs() {
    let e = document.querySelector(".servs .cards ");
    [
        { icon: "fa-solid fa-laptop-code", title: "website design", card: "1", animation: "slideleft", title_id: "website_design", info_id: "website_design_des" },
        { icon: "fa-regular fa-flag", title: "leadership", card: "2", animation: "slidebottom", title_id: "leadership", info_id: "leadership_des" },
        { icon: "fa-light fa-laptop-mobile", title: "responsivety", card: "3", animation: "slideright", title_id: "responsivity", info_id: "responsivity_des" },
        { icon: "fa-regular fa-keyboard", title: "fast typing", card: "4", animation: "slideleft", title_id: "fast_typing", info_id: "fast_typing_des" },
        { icon: "fa-solid fa-code", title: "clean code", card: "5", animation: "slidebottom", title_id: "clean_code", info_id: "clean_code_des" },
        { icon: "fa-brands fa-sass", title: "sass coding", card: "6", animation: "slideright", title_id: "sass_coding", info_id: "sass_coding_des" },
    ].forEach((t) => {
        e.innerHTML += `
  <div  class="card card${t.card}" style="animation-name: ${t.animation} ;">
                <i class="${t.icon} icon"></i>
                <p id="${t.title_id}" class="title">${t.title}</p>
                <p id="${t.info_id}" class="info">
                </p>
    </div>
          `;
    });
}
function projects() {
    let e = document.querySelector(".projects .all ");
    [
        {
            name: "solo leveling",
            img: "websites/6.webp",
            langs: "reactjs <span> __ </span> react router <span> __ </span> framer motion",
            video: "#",
            live: "#",
            info: "soon !!",
            dataCard: "website",
        },
        {
            name: "marvel universe",
            img: "websites/1.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-webdeveloper-frontend-activity-7276253296107937793-auPm?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Marvel-Universe/",
            info: "7 pages website   <span> | </span> dynamic card details popup <span> | </span> Dynamic Element Creation  <span> | </span> character data filtering  <span> | </span>  dark / light themes  <span> | </span> Custom-Built Slider  <span> | </span> fully responsive  <span> | </span> smart search",
            dataCard: "website",
        },
        {
            name: "nFTs e-commerce",
            img: "webpages/7.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7249836916961857536-97b4?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/NFTs/",
            info: "Add to Cart functionality .  <span> | </span> Saved Favorites in local storage .   <span> | </span> Smart Search .   <span> | </span> Category Filtering .   <span> | </span> Fully Responsive .   <span> | </span> Custom-Built Slider .   <span> | </span> Dynamic Element Creation .",
            dataCard: "webpage",
        },
        {
            name: "lamborghini cars",
            img: "webpages/2.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7212145172527108096-oEJp?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Cars/",
            info: " 4 stunning themes  <span> | </span> Responsive design   <span> | </span> creative animation   <span> | </span> Explore the latest in car technology and trends \uD83D\uDE80",
            dataCard: "webpage",
        },
        {
            name: "in allah mercy",
            img: "webpages/1.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7245397154247135232-ptR4?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/in-Allah-mercy/",
            info: "Smooth Navigation   <span> | </span> Categorized Content   <span> | </span> Random Selecting   <span> | </span> Responsive Design",
            dataCard: "webpage",
        },
        {
            name: "spider verse",
            img: "webpages/3.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_html5-html5-css-activity-7151624825881407489-rUyG?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Spider-Verse/",
            info: "new design   <span> | </span> character filtering   <span> | </span> Independent data for each character   <span> | </span> creative animation",
            dataCard: "webpage",
        },
        {
            name: "bat-man",
            img: "webpages/5.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-frontend-html-activity-7144307855276371969-NLw-?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Bat-Man/",
            info: "lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem",
            dataCard: "webpage",
        },
        {
            name: "remoFlowery",
            img: "webpages/4.webp",
            langs: "html_css",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_remoflowery-flowerlovers-uiuxdesign-activity-7232085304956882945-hsMg?utm_source=share&utm_medium=member_desktop",
            live: "",
            info: "lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem",
            dataCard: "webpage",
        },
        {
            name: "gaming store",
            img: "webpages/6.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-responsive-gaming-website-for-activity-7114199072869134336-VZLn?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/gaming-store/",
            info: "lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem",
            dataCard: "webpage",
        },
        {
            name: "one piece world",
            img: "websites/2.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_html5-htmlcssjavascript-css3-activity-7171480585045950465-zu1d?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/OnePiece-World/",
            info: "5 pages website .  <span> | </span> fully responsive .  <span> | </span> card filtering .  <span> | </span> Dynamic Element Creation .  <span> | </span> creative design, animation .",
            dataCard: "website",
        },
        
        {
            name: "to do list",
            img: "others/1.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_exciting-news-im-thrilled-to-announce-activity-7196603245832597504-ncbI?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/to-do-list/",
            info: "Add tasks   <span> | </span> save tasks in local storage   <span> | </span> mark ended tasks   <span> | </span> remove tasks",
            dataCard: "others",
        },
        {
            name: "tic tac toi",
            img: "others/2.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-with-html-css-and-js-it-activity-7104889993206071298-Lmgp?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Tic-Tac-Toi/",
            info: "lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem",
            dataCard: "others",
        },
        {
            name: "calculator",
            img: "others/3.webp",
            langs: "html <span> __ </span> css <span> __ </span> js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-js-activity-7083869556242333697-ZJta?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Calculator_Project/",
            info: "lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem",
            dataCard: "others",
        },
        {
            name: "vertual keyboard",
            img: "others/4.webp",
            langs: "html _ css _ js",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-js-activity-7089669886536265728-CL3Z?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Keyboard_Project/",
            info: "lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem",
            dataCard: "others",
        },
        {
            name: "home tab",
            img: "others/5.webp",
            langs: "html _ css",
            video:
                "https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-with-new-idea-%D8%A7%D9%84%D9%81%D9%83%D8%B1%D8%A9-%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D9%8A%D8%AF%D8%AC-activity-7095814287335526400-1r9D?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Home-Tab/",
            info: "lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem",
            dataCard: "others",
        },
        { name: "smart-tech",
            img: "websites/5.webp",
            langs: "figma <span> __ </span> html <span> __ </span> css <span> __ </span> js <span> __ </span> json <span> __ </span> aSP .net <span> __ </span> sQL server",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-webdesign-webdeveloper-activity-7293689978583171072-vRLD?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Smart-Tech/",
            info: "soon!!",
            dataCard: "team" 
        },
        {
            name: "foodie restaurant",
            img: "websites/3.webp",
            langs: "html <span> __ </span> css <span> __ </span> js <span> __ </span> json <span> __ </span> aSP .net <span> __ </span> sQL server",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-frontenddeveloper-backenddeveloper-activity-7217895659348099072-Beoi?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Restaurant/",
            info: "10 pages website   <span> | </span> editable user profile   <span> | </span> order meals with stripe payment   <span> | </span> add to cart functionality   <span> | </span> add to favourite functionality  <span> | </span> login & sign validation",
            dataCard: "team",
        },
        {
            name: "airline system",
            img: "websites/4.webp",
            langs: "html <span> __ </span> css <span> __ </span> js <span> __ </span> json <span> __ </span> php <span> __ </span> my sQL",
            video: "https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-html-css-activity-7143632404757336066-l3KK?utm_source=share&utm_medium=member_desktop",
            live: "https://samermo11.github.io/Airline--system/",
            info: "lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem   <span> | </span> lorem lorem lorem lorem",
            dataCard: "team",
        },
        
    ].forEach((t) => {
        e.innerHTML += `
 <div class="project" data-card="${t.dataCard}">
            <div class="leftt">
                    <p id="${t.name}">${t.name}</p>
                    <img src="${t.img}" alt="ProjectImg" loading="lazy">    
                    <div class="plinks">
                                        <a href="${t.live}" target="_blank">demo live</a>
                    <a href="${t.video}" target="_blank">video</a>
                    </div>

                    
                    </div>
                    <div class="rightt">
                        <div>
                    <span>tech skills</span>
                    <p class="plangs">${t.langs}</p>
                        </div>
                            <div>
                    <span>features</span>
                    <p> 
                    ${t.info}
                    </p>
                            </div>
                    </div>
            </div>
          `;
    });
}
(window.onscroll = function () {
    scrollY >= 660 ? (arr.style.display = "block") : (arr.style.display = "none");
}),
    window.addEventListener("scroll", reveal),
    window.addEventListener("scroll", bottom),
    window.addEventListener("scroll", left),
    window.addEventListener("scroll", right),
    servs(),
    skills(),
    projects();
const buttons = document.querySelectorAll(".btn"),
    contents = document.querySelectorAll(".projects .all .project");
buttons.forEach(function (e) {
    e.addEventListener("click", function () {
        buttons.forEach(function (e) {
            e.classList.remove("active"), e.classList.remove("first");
        }),
            e.classList.add("active");
        let t = e.getAttribute("data-btn");
        "all" === t
            ? contents.forEach(function (e) {
                  e.classList.add("show"), e.classList.remove("hide");
              })
            : contents.forEach(function (e) {
                  e.getAttribute("data-card") === t ? (e.classList.add("show"), e.classList.remove("hide")) : (e.classList.add("hide"), e.classList.remove("show"));
              });
    });
});
const en = "en.json",
    ar = "ar.json";
let currentLanguage = localStorage.getItem("language") || "en";
function toggleLanguage() {
    (currentLanguage = "ar" === currentLanguage ? "en" : "ar"), localStorage.setItem("language", currentLanguage);
    let e = document.getElementById("languageButton");
    (e.innerHTML = `
    ${"ar" === currentLanguage ? "English" : "العربية"}
    <i class="fa-sharp fa-light fa-globe"></i>
  `),
        applyFont(currentLanguage),
        loadContent(currentLanguage);
}
function loadContent(e) {
    fetch("en" === e ? "en.json" : "ar.json")
        .then((e) => e.json())
        .then((e) => {
            [
                "skills",
                "about",
                "services",
                "projects",
                "contact",
                "hello",
                "name",
                "skillsHead",
                "title",
                "about_me",
                "more_about_me",
                "download_cv",
                "who_am_i",
                "about-me",
                "name0",
                "phone",
                "email",
                "country",
                "country2",
                // "tech_skills",
                "education",
                "education2",
                "contact_me",
                "what_i",
                "my_works",
                "theme",
                "serv",
                "links",
                "contactFooter",
                "paraFooter",
                "website_design",
                "website_design_des",
                "leadership",
                "leadership_des",
                "responsivity",
                "responsivity_des",
                "fast_typing",
                "fast_typing_des",
                "clean_code",
                "clean_code_des",
                "sass_coding",
                "sass_coding_des",
                "all",
                "websites",
                "webpages",
                "tools",
                "contact2",
                "name2",
                "job",
                "cont_des",
                "serv1",
                "serv2",
                "serv3",
                "serv4",
                "link1",
                "link2",
                "link3",
                "link4",
            ].forEach((t) => {
                document.getElementById(t).innerText = e[t];
            });
        });
}
function applyFont(e) {
    let t = document.documentElement;
    "ar" === e ? (t.style.setProperty("--main-font", "Cairo, sans-serif"), (t.style.direction = "rtl")) : (t.style.setProperty("--main-font", "Fredoka, sans-serif"), (t.style.direction = "ltr"));
}
applyFont(currentLanguage), loadContent(currentLanguage);
