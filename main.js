window.addEventListener("scroll",function(){let e=document.querySelectorAll(".section"),t=document.querySelectorAll(".nav-link"),o="";e.forEach(e=>{let t=e.offsetTop;this.window.scrollY>=t-120&&(o=e.getAttribute("id"))}),t.forEach(e=>{e.classList.remove("active"),e.getAttribute("href")===`#${o}`&&e.classList.add("active")})});const toggle=document.querySelector(".toggle"),nav=document.querySelector(".nav"),extra=document.querySelectorAll(".extra");toggle.addEventListener("click",()=>{toggle.classList.toggle("active"),nav.classList.contains("show")?(nav.classList.remove("show"),nav.classList.add("hide")):(nav.classList.remove("hide"),nav.classList.add("show")),extra.forEach(e=>{e.classList.contains("show")?(e.classList.remove("show"),e.classList.add("hide")):(e.classList.remove("hide"),e.classList.add("show"))})});const colors=document.querySelectorAll(".color"),moonn=document.getElementById("moon"),sunn=document.getElementById("sun"),savedClasses=localStorage.getItem("selectedClasses")||"",savedTheme=localStorage.getItem("theme")||"moon";document.body.className=savedClasses,moonn.style.display="moon"===savedTheme?"block":"none",sunn.style.display="sun"===savedTheme?"block":"none";const updateLocalStorage=()=>{localStorage.setItem("selectedClasses",document.body.className),localStorage.setItem("theme","block"===moonn.style.display?"moon":"sun")};colors.forEach(e=>{e.addEventListener("click",()=>{document.body.className=document.body.className.replace(/color\d+/g,""),document.body.classList.add(e.classList[1]),updateLocalStorage()})}),moonn.addEventListener("click",()=>{document.body.classList.remove("light"),moonn.style.display="none",sunn.style.display="block",updateLocalStorage()}),sunn.addEventListener("click",()=>{document.body.classList.add("light"),sunn.style.display="none",moonn.style.display="block",updateLocalStorage()});const tab=document.querySelector(".theme"),moods=document.querySelector(".moods .content");tab.addEventListener("click",()=>{moods.classList.contains("moodon")?(moods.classList.remove("moodon"),moods.classList.add("moodoff")):(moods.classList.remove("moodoff"),moods.classList.add("moodon"))});let arr=document.getElementById("arrow");function reveal(){for(var e=document.querySelectorAll(".reveal"),t=0;t<e.length;t++){let o=window.innerHeight,s;e[t].getBoundingClientRect().top<o-150?e[t].classList.add("active"):e[t].classList.remove("active")}}function bottom(){for(var e=document.querySelectorAll(".bottom"),t=0;t<e.length;t++){let o=window.innerHeight,s;e[t].getBoundingClientRect().top<o-150?e[t].classList.add("active"):e[t].classList.remove("active")}}function left(){for(var e=document.querySelectorAll(".left"),t=0;t<e.length;t++){let o=window.innerHeight,s;e[t].getBoundingClientRect().top<o-150?e[t].classList.add("active"):e[t].classList.remove("active")}}function right(){for(var e=document.querySelectorAll(".right"),t=0;t<e.length;t++){let o=window.innerHeight,s;e[t].getBoundingClientRect().top<o-150?e[t].classList.add("active"):e[t].classList.remove("active")}}function servs(){let e=document.querySelector(".servs .cards ");[{icon:"fa-solid fa-laptop-code",title:"website design",card:"1",animation:"slideleft",title_id:"website_design",info_id:"website_design_des"},{icon:"fa-regular fa-flag",title:"leadership",card:"2",animation:"slidebottom",title_id:"leadership",info_id:"leadership_des"},{icon:"fa-light fa-laptop-mobile",title:"responsivety",card:"3",animation:"slideright",title_id:"responsivity",info_id:"responsivity_des"},{icon:"fa-regular fa-keyboard",title:"fast typing",card:"4",animation:"slideleft",title_id:"fast_typing",info_id:"fast_typing_des"},{icon:"fa-solid fa-code",title:"clean code",card:"5",animation:"slidebottom",title_id:"clean_code",info_id:"clean_code_des"},{icon:"fa-brands fa-sass",title:"sass coding",card:"6",animation:"slideright",title_id:"sass_coding",info_id:"sass_coding_des"},].forEach(t=>{e.innerHTML+=`
  <div  class="card card${t.card}" style="animation-name: ${t.animation} ;">
                <i class="${t.icon} icon"></i>
                <p id="${t.title_id}" class="title">${t.title}</p>
                <p id="${t.info_id}" class="info">
                </p>
    </div>
          `})}function projects(){let e=document.querySelector(".projects .all ");[{name:"marvel universe",img:"websites/1.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-webdeveloper-frontend-activity-7276253296107937793-auPm?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Marvel-Universe/",info:"- 7 pages website <br> - dynamic card details popup<br> - Dynamic Element Creation<br> - character data filtering<br> -  dark / light themes<br> - Custom-Built Slider<br> - fully responsive<br> - smart search",dataCard:"website"},{name:"nFTs e-commerce",img:"webpages/7.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7249836916961857536-97b4?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/NFTs/",info:"- Add to Cart functionality .<br> - Saved Favorites in local storage . <br> - Smart Search . <br> - Category Filtering . <br> - Fully Responsive . <br> - Custom-Built Slider . <br> - Dynamic Element Creation .",dataCard:"webpage"},{name:"lamborghini cars",img:"webpages/2.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7212145172527108096-oEJp?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Cars/",info:" - 4 stunning themes<br> - Responsive design <br> - creative animation <br> - Explore the latest in car technology and trends \uD83D\uDE80",dataCard:"webpage"},{name:"in allah mercy",img:"webpages/1.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7245397154247135232-ptR4?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/in-Allah-mercy/",info:"- Smooth Navigation <br> - Categorized Content <br> - Random Selecting <br> - Responsive Design <br>",dataCard:"webpage"},{name:"spider verse",img:"webpages/3.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html5-html5-css-activity-7151624825881407489-rUyG?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Spider-Verse/",info:"- new design <br> - character filtering <br> - Independent data for each character <br> - creative animation",dataCard:"webpage"},{name:"bat-man",img:"webpages/5.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-frontend-html-activity-7144307855276371969-NLw-?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Bat-Man/",info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",dataCard:"webpage"},{name:"remoFlowery",img:"webpages/4.png",langs:"html_css",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_remoflowery-flowerlovers-uiuxdesign-activity-7232085304956882945-hsMg?utm_source=share&utm_medium=member_desktop",live:"",info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",dataCard:"webpage"},{name:"gaming store",img:"webpages/6.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-responsive-gaming-website-for-activity-7114199072869134336-VZLn?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/gaming-store/",info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",dataCard:"webpage"},{name:"one piece world",img:"websites/2.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html5-htmlcssjavascript-css3-activity-7171480585045950465-zu1d?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/OnePiece-World/",info:"- 5 pages website .<br>- fully responsive .<br>- card filtering .<br>- Dynamic Element Creation .<br>- creative design, animation .",dataCard:"website"},{name:"smart-tech",img:"websites/5.png",langs:"html _ css _  js",video:"#",live:"#",info:"soon!!",dataCard:"website"},{name:"airline system",img:"websites/4.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-html-css-activity-7143632404757336066-l3KK?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Airline--system/",info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",dataCard:"website"},{name:"foodie restaurant",img:"websites/3.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-frontenddeveloper-backenddeveloper-activity-7217895659348099072-Beoi?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Restaurant/",info:"- 10 pages website <br>- editable user profile <br>- order meals with stripe payment <br>- add to cart functionality <br>- add to favourite functionality <br> - login & sign validation",dataCard:"website"},{name:"to do list",img:"others/1.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_exciting-news-im-thrilled-to-announce-activity-7196603245832597504-ncbI?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/to-do-list/",info:"- Add tasks <br>- save tasks in local storage <br>- mark ended tasks <br>- remove tasks",dataCard:"others"},{name:"tic tac toi",img:"others/2.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-with-html-css-and-js-it-activity-7104889993206071298-Lmgp?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Tic-Tac-Toi/",info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",dataCard:"others"},{name:"calculator",img:"others/3.png",langs:"html _ css _  js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-js-activity-7083869556242333697-ZJta?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Calculator_Project/",info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",dataCard:"others"},{name:"vertual keyboard",img:"others/4.png",langs:"html _ css _ js",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-js-activity-7089669886536265728-CL3Z?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Keyboard_Project/",info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",dataCard:"others"},{name:"home tab",img:"others/5.png",langs:"html _ css",video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-with-new-idea-%D8%A7%D9%84%D9%81%D9%83%D8%B1%D8%A9-%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D9%8A%D8%AF%D8%AC-activity-7095814287335526400-1r9D?utm_source=share&utm_medium=member_desktop",live:"https://samermo11.github.io/Home-Tab/",info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",dataCard:"others"},].forEach(t=>{e.innerHTML+=`
 <div class="project" data-card="${t.dataCard}">
                <div class="head">
                    <p id="${t.name}">${t.name}</p>
                    <p>${t.langs}</p>
                </div>
                <div class="content">
                    <div class="leftt">
                        <img src="${t.img}" alt="ProjectImg" loading="lazy">
                        <a href="${t.live}" target="_blank">demo live</a>
                        <a href="${t.video}" target="_blank">video</a>
                    </div>
                    <p> <span>features</span>
                    ${t.info}
                    </p>
                </div>
            </div>
          `})}window.onscroll=function(){scrollY>=660?arr.style.display="block":arr.style.display="none"},window.addEventListener("scroll",reveal),window.addEventListener("scroll",bottom),window.addEventListener("scroll",left),window.addEventListener("scroll",right),servs(),projects();const buttons=document.querySelectorAll(".btn"),contents=document.querySelectorAll(".projects .all .project");buttons.forEach(function(e){e.addEventListener("click",function(){buttons.forEach(function(e){e.classList.remove("active"),e.classList.remove("first")}),e.classList.add("active");let t=e.getAttribute("data-btn");"all"===t?contents.forEach(function(e){e.classList.add("show"),e.classList.remove("hide")}):contents.forEach(function(e){e.getAttribute("data-card")===t?(e.classList.add("show"),e.classList.remove("hide")):(e.classList.add("hide"),e.classList.remove("show"))})})});const en="en.json",ar="ar.json";let currentLanguage=localStorage.getItem("language")||"en";function toggleLanguage(){currentLanguage="ar"===currentLanguage?"en":"ar",localStorage.setItem("language",currentLanguage);let e=document.getElementById("languageButton");e.innerHTML=`
    ${"ar"===currentLanguage?"English":"العربية"}
    <i class="fa-sharp fa-light fa-globe"></i>
  `,applyFont(currentLanguage),loadContent(currentLanguage)}function loadContent(e){fetch("en"===e?"en.json":"ar.json").then(e=>e.json()).then(e=>{["home","about","services","projects","contact","hello","name","title","about_me","more_about_me","download_cv","who_am_i","about-me","name0","phone","email","country","country2","tech_skills","education","education2","contact_me","what_i","my_works","theme","serv","links","contactFooter","paraFooter","website_design","website_design_des","leadership","leadership_des","responsivity","responsivity_des","fast_typing","fast_typing_des","clean_code","clean_code_des","sass_coding","sass_coding_des","all","websites","webpages","tools","contact2","name2","job","cont_des","serv1","serv2","serv3","serv4","link1","link2","link3","link4",].forEach(t=>{document.getElementById(t).innerText=e[t]})})}function applyFont(e){let t=document.documentElement;"ar"===e?(t.style.setProperty("--main-font","Cairo, sans-serif"),t.style.direction="rtl"):(t.style.setProperty("--main-font","Fredoka, sans-serif"),t.style.direction="ltr")}applyFont(currentLanguage),loadContent(currentLanguage);