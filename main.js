
let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');

function togglemenu(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}
// ------------------------------------------------------
let moonn = document.getElementById('moon');
let sunn = document.getElementById('sun');

moonn.addEventListener('click', function(){

    document.body.classList.remove('light');
    // document.body.style.background=' #000000e3';
    this.style.display='none';
    sunn.style.display='block';

})

sunn.addEventListener('click', function(){

    document.body.classList.add('light');
    // document.body.style.background=' #e2e4e7';

    this.style.display='none';
    moonn.style.display='block';
})
// ------------------------------------------
let arr = document.getElementById('arrow');

window.onscroll = function(){
    if(scrollY >= 660)
    {
        arr.style.display ='block';
    }else{
        arr.style.display ='none';
    }
}
// ------------------------------------------
window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length ; i++){

    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

// ----------------------------------------------------------
window.addEventListener('scroll',bottom);

function bottom(){
  var bottoms = document.querySelectorAll('.bottom');

  for(var b = 0; b < bottoms.length ; b++){

    let windowheight = window.innerHeight;
    let revealtopppp = bottoms[b].getBoundingClientRect().top;
    let revealpointttt = 150;

    if(revealtopppp < windowheight - revealpointttt){
      bottoms[b].classList.add('active');
    }
    else{
      bottoms[b].classList.remove('active');
    }
  }
}

// ----------------------------------------------------------
window.addEventListener('scroll',left);

function left(){
  var lefts = document.querySelectorAll('.left');

  for(var l = 0; l < lefts.length ; l++){

    let windowheight = window.innerHeight;
    let revealtopp = lefts[l].getBoundingClientRect().top;
    let revealpointt = 150;

    if(revealtopp < windowheight - revealpointt){
      lefts[l].classList.add('active');
    }
    else{
      lefts[l].classList.remove('active');
    }
  }
}

// ----------------------------------------------------------


window.addEventListener('scroll',right);

function right(){
  var rights = document.querySelectorAll('.right');
  
  for(var r = 0; r < rights.length ; r++){
    
    let windowheight = window.innerHeight;
    let revealtoppp = rights[r].getBoundingClientRect().top;
    let revealpointtt = 150;
    
    if(revealtoppp < windowheight - revealpointtt){
      rights[r].classList.add('active');
    }
    else{
      rights[r].classList.remove('active');
    }
  }
}

// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
function servs() {
  const servData = [
      {
          icon:"fa-solid fa-laptop-code",
          title: "website design",
          info: "i have got much experience working with front-end coding HTML, CSS, SASS, BOOTSTRAP, JAVASCRIPT",
          card: "1",
          animation: "slideleft"
      },
      {
          icon:"fa-regular fa-flag",
          title: "leadership",
          info: "As a team leader, I foster collaboration and drive success through strong communication and strategic planning.",
          card: "2",
          animation: "slidebottom"
      },
      {
          icon:"fa-light fa-laptop-mobile",
          title: "responsivety",
          info: "I specialize in making websites responsive, ensuring they look and function well on all devices.",
          card: "3",
          animation: "slideright"
      },
      {
          icon:"fa-regular fa-keyboard",
          title: "fast typing",
          info: "I possess rapid coding abilities, allowing me to efficiently craft top-tier websites with precision and speed.",
          card: "4",
          animation: "slideleft"
      },
      {
          icon:"fa-solid fa-code",
          title: "clean code",
          info: "I specialize in crafting clean code that's easy to understand, making website development more efficient.",
          card: "5",
          animation: "slidebottom"
      },
      {
          icon:"fa-brands fa-sass",
          title: "sass coding",
          info: "I specialize in writing SASS code, streamlining CSS development for more efficient and maintainable styling.",
          card: "6",
          animation: "slideright"
      },

  ];

  const servCards = document.querySelector(".servs .cards ");

  servData.forEach((serv) => {
      servCards.innerHTML += `
  <div class="card card${serv.card}" style="animation-name: ${serv.animation} ;">
                <i class="${serv.icon} icon"></i>
                <p class="title">${serv.title}</p>
                <p class="info">
                ${serv.info}
                </p>
    </div>
          `;
  });
}
servs();
// ---------------------------------------
// ---------------------------------------
// ---------------------------------------
function projects() {
  const projectData = [

    { name: "marvel universe",
      img: "websites/1.png",
      langs: "html _ css _  js", 
      video:"",
      live:"https://samermo11.github.io/Marvel-Universe/",
      info:"- 7 pages website <br> - dynamic card details popup<br> - Dynamic Element Creation<br> - character data filtering<br> -  dark / light themes<br> - Custom-Built Slider<br> - fully responsive<br> - smart search",
      
      dataCard:"website"
    },
    {
      name: "nFTs e-commerce",
      img: "webpages/7.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7249836916961857536-97b4?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/NFTs/",
      info:"- Add to Cart functionality .<br> - Saved Favorites in local storage . <br> - Smart Search . <br> - Category Filtering . <br> - Fully Responsive . <br> - Custom-Built Slider . <br> - Dynamic Element Creation .",
       
      dataCard:"webpage"
    },
    {
      name: "lamborghini cars",
      img: "webpages/2.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7212145172527108096-oEJp?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/Cars/",
      info:" - 4 stunning themes<br> - Responsive design <br> - creative animation <br> - Explore the latest in car technology and trends 🚀",
       
      dataCard:"webpage"
    },
    {
      name: "in allah mercy",
      img: "webpages/1.png", 
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-javascript-activity-7245397154247135232-ptR4?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/in-Allah-mercy/",
      info:"- Smooth Navigation <br> - Categorized Content <br> - Random Selecting <br> - Responsive Design <br>",
       
      dataCard:"webpage"
    },
    {
      name: "spider verse",
      img: "webpages/3.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html5-html5-css-activity-7151624825881407489-rUyG?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/Spider-Verse/",
      info:"- new design <br> - character filtering <br> - Independent data for each character <br> - creative animation",
       
      dataCard:"webpage"
    },
    {
      name: "bat-man",
      img: "webpages/5.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-frontend-html-activity-7144307855276371969-NLw-?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/Bat-Man/",
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"webpage"
    },
    {
      name: "remoFlowery",
      img: "webpages/4.png",
      langs: "html_css",
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_remoflowery-flowerlovers-uiuxdesign-activity-7232085304956882945-hsMg?utm_source=share&utm_medium=member_desktop",
      live:"",
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"webpage"
    },
    {
      name: "gaming store",
      img: "webpages/6.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-responsive-gaming-website-for-activity-7114199072869134336-VZLn?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/gaming-store/",
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"webpage"
    },
    
    // -------------
    // -------------
    
    { name: "one piece world",
      img: "websites/2.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html5-htmlcssjavascript-css3-activity-7171480585045950465-zu1d?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/OnePiece-World/",
      info:"- 5 pages website .<br>- fully responsive .<br>- card filtering .<br>- Dynamic Element Creation .<br>- creative design, animation .",
       
      dataCard:"website"
    },
    { name: "tech e-commerce",
      img: "websites/5.png",
      langs: "html _ css _  js", 
      video:"#",
      live:"#",
      info:"soon!!",
       
      dataCard:"website"
    },
    { name: "airline system",
      img: "websites/4.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-html-css-activity-7143632404757336066-l3KK?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/Airline--system/",
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"website"
    },
    { name: "foodie restaurant",
      img: "websites/3.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-frontenddeveloper-backenddeveloper-activity-7217895659348099072-Beoi?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/Restaurant/",
      info:"- 10 pages website <br>- editable user profile <br>- order meals with stripe payment <br>- add to cart functionality <br>- add to favourite functionality <br> - login & sign validation",
       
      dataCard:"website"
    },
    // -------------
    // -------------
    { name: "to do list",
      img: "others/1.png", 
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_exciting-news-im-thrilled-to-announce-activity-7196603245832597504-ncbI?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/to-do-list/", 
      info:"- Add tasks <br>- save tasks in local storage <br>- mark ended tasks <br>- remove tasks",
       
      dataCard:"others"
    },
    { name: "tic tac toi",
      img: "others/2.png", 
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-with-html-css-and-js-it-activity-7104889993206071298-Lmgp?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/Tic-Tac-Toi/", 
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"others"
    },
    { name: "calculator",
      img: "others/3.png", 
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-js-activity-7083869556242333697-ZJta?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/Calculator_Project/", 
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"others"
    },
    { name: "vertual keyboard",
      img: "others/4.png", 
      langs: "html _ css _ js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-js-activity-7089669886536265728-CL3Z?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/Keyboard_Project/", 
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"others"
    },
    { name: "home tab",
      img: "others/5.png", 
      langs: "html _ css", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-with-new-idea-%D8%A7%D9%84%D9%81%D9%83%D8%B1%D8%A9-%D9%85%D9%86-%D8%A7%D9%84%D8%A8%D9%8A%D8%AF%D8%AC-activity-7095814287335526400-1r9D?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/Home-Tab/", 
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"others"
    },
  ];

  const projectCards = document.querySelector(".projects .all ");

  projectData.forEach((project) => {
      projectCards.innerHTML += `
 <div class="project" data-card="${project.dataCard}">
                <div class="head">
                    <p>${project.name}</p>
                    <p>${project.langs}</p>
                </div>
                <div class="content">
                    <div class="leftt">
                        <img src="${project.img}" alt="ProjectImg" loading="lazy">
                        <a href="${project.live}" target="_blank">demo live</a>
                        <a href="${project.video}" target="_blank">video</a>
                    </div>
                    <p> <span>features</span>
                    ${project.info}
                    </p>
                </div>
            </div>
          `;
  });
}
projects();
// ------------------------------------------




const buttons = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.projects .all .project');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {

    buttons.forEach(function(btn) {
      btn.classList.remove('active');
      btn.classList.remove('first');
  });

  button.classList.add('active');
      const target = button.getAttribute('data-btn');

      if (target === 'all') {
          contents.forEach(function(box) {
              box.classList.add('show');
              box.classList.remove('hide');
          });
      } else {
          contents.forEach(function(box) {
              if (box.getAttribute('data-card') === target) {
                  box.classList.add('show');
                  box.classList.remove('hide');
                } else {
                  box.classList.add('hide');
                  box.classList.remove('show');
              }
          });
      }
  });
}); 