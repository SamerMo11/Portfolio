window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (this.window.scrollY >= sectionTop -120) {
          currentSection = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
      }
  });
});
// --------------
// --------------
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");
const extra = document.querySelectorAll(".extra");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  // التحكم في الـ links
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
    nav.classList.add("show");
  }
  // التحكم في جميع عناصر navicons
  extra.forEach((extras) => {
    if (extras.classList.contains("show")) {
      extras.classList.remove("show");
      extras.classList.add("hide");
    } else {
      extras.classList.remove("hide");
      extras.classList.add("show");
    }
  });
});
// let toggle = document.querySelector('.toggle');
// let nav = document.querySelector('.nav');
// let extra = document.querySelector('.extra');

// function togglemenu(){
//     toggle.classList.toggle('active');
//     nav.classList.toggle('active');
//     extra.classList.toggle('extra2');
// }

// toggle.addEventListener("click", () => {
//   if (moods.classList.contains("moodon")) {
//     moods.classList.remove("moodon");
//     moods.classList.add("moodoff");
//   } else {
//     moods.classList.remove("moodoff");
//     moods.classList.add("moodon");
//   }
// });
// ------------------------------------------------------
// ------------------------------------------------------
// عناصر الألوان والوضع
const colors = document.querySelectorAll('.color');
const moonn = document.getElementById('moon');
const sunn = document.getElementById('sun');

// استرجاع البيانات المحفوظة في localStorage
const savedClasses = localStorage.getItem('selectedClasses') || '';
const savedTheme = localStorage.getItem('theme') || 'moon';

// تطبيق الإعدادات المحفوظة
document.body.className = savedClasses;
moonn.style.display = savedTheme === 'moon' ? 'block' : 'none';
sunn.style.display = savedTheme === 'sun' ? 'block' : 'none';

// وظيفة لتحديث localStorage
const updateLocalStorage = () => {
  localStorage.setItem('selectedClasses', document.body.className);
  localStorage.setItem('theme', moonn.style.display === 'block' ? 'moon' : 'sun');
};

// حدث لتغيير الألوان
colors.forEach(color => {
  color.addEventListener('click', () => {
    document.body.className = document.body.className.replace(/color\d+/g, ''); 
    document.body.classList.add(color.classList[1]); 
    updateLocalStorage(); 
  });
});


moonn.addEventListener('click', () => {
  document.body.classList.remove('light'); 
  moonn.style.display = 'none';
  sunn.style.display = 'block';
  updateLocalStorage(); 
});

sunn.addEventListener('click', () => {
  document.body.classList.add('light'); 
  sunn.style.display = 'none';
  moonn.style.display = 'block';
  updateLocalStorage(); 
});




const tab = document.querySelector(".theme");
const moods = document.querySelector(".moods .content");
tab.addEventListener("click", () => {
  if (moods.classList.contains("moodon")) {
    moods.classList.remove("moodon");
    moods.classList.add("moodoff");
  } else {
    moods.classList.remove("moodoff");
    moods.classList.add("moodon");
  }
});



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
          card: "1",
          animation: "slideleft",
          title_id:"website_design",
          info_id:"website_design_des",
      },
      {
          icon:"fa-regular fa-flag",
          title: "leadership",
          card: "2",
          animation: "slidebottom",
          title_id:"leadership",
          info_id:"leadership_des",
      },
      {
          icon:"fa-light fa-laptop-mobile",
          title: "responsivety",
          card: "3",
          animation: "slideright",
          title_id:"responsivity",
          info_id:"responsivity_des",
      },
      {
          icon:"fa-regular fa-keyboard",
          title: "fast typing",
          card: "4",
          animation: "slideleft",
          title_id:"fast_typing",
          info_id:"fast_typing_des",
      },
      {
          icon:"fa-solid fa-code",
          title: "clean code",
          card: "5",
          animation: "slidebottom",
          title_id:"clean_code",
          info_id:"clean_code_des",
      },
      {
          icon:"fa-brands fa-sass",
          title: "sass coding",
          card: "6",
          animation: "slideright",
          title_id:"sass_coding",
          info_id:"sass_coding_des",
      },

  ];

  const servCards = document.querySelector(".servs .cards ");

  servData.forEach((serv) => {
      servCards.innerHTML += `
  <div  class="card card${serv.card}" style="animation-name: ${serv.animation} ;">
                <i class="${serv.icon} icon"></i>
                <p id="${serv.title_id}" class="title">${serv.title}</p>
                <p id="${serv.info_id}" class="info">
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

    { 
      name: "marvel universe",
      img: "websites/1.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-webdeveloper-frontend-activity-7276253296107937793-auPm?utm_source=share&utm_medium=member_desktop",
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
    
    { 
      name: "one piece world",
      img: "websites/2.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html5-htmlcssjavascript-css3-activity-7171480585045950465-zu1d?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/OnePiece-World/",
      info:"- 5 pages website .<br>- fully responsive .<br>- card filtering .<br>- Dynamic Element Creation .<br>- creative design, animation .",
       
      dataCard:"website"
    },
    { 
      name: "smart-tech",
      img: "websites/5.png",
      langs: "html _ css _  js", 
      video:"#",
      live:"#",
      info:"soon!!",
       
      dataCard:"website"
    },
    { 
      name: "airline system",
      img: "websites/4.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-html-css-activity-7143632404757336066-l3KK?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/Airline--system/",
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"website"
    },
    { 
      name: "foodie restaurant",
      img: "websites/3.png",
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_webdevelopment-frontenddeveloper-backenddeveloper-activity-7217895659348099072-Beoi?utm_source=share&utm_medium=member_desktop",
      live:"https://samermo11.github.io/Restaurant/",
      info:"- 10 pages website <br>- editable user profile <br>- order meals with stripe payment <br>- add to cart functionality <br>- add to favourite functionality <br> - login & sign validation",
       
      dataCard:"website"
    },
    // -------------
    // -------------
    {
      name: "to do list",
      img: "others/1.png", 
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_exciting-news-im-thrilled-to-announce-activity-7196603245832597504-ncbI?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/to-do-list/", 
      info:"- Add tasks <br>- save tasks in local storage <br>- mark ended tasks <br>- remove tasks",
       
      dataCard:"others"
    },
    {
      name: "tic tac toi",
      img: "others/2.png", 
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_new-project-with-html-css-and-js-it-activity-7104889993206071298-Lmgp?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/Tic-Tac-Toi/", 
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"others"
    },
    {
      name: "calculator",
      img: "others/3.png", 
      langs: "html _ css _  js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-js-activity-7083869556242333697-ZJta?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/Calculator_Project/", 
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"others"
    },
    {
      name: "vertual keyboard",
      img: "others/4.png", 
      langs: "html _ css _ js", 
      video:"https://www.linkedin.com/posts/samer-mohamed-5b2586280_html-css-js-activity-7089669886536265728-CL3Z?utm_source=share&utm_medium=member_desktop", 
      live:"https://samermo11.github.io/Keyboard_Project/", 
      info:"- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>- lorem lorem lorem lorem <br>",
       
      dataCard:"others"
    },
    {
      name: "home tab",
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
                    <p id="${project.name}">${project.name}</p>
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
// ------------------------------
const en = 'en.json';
const ar = 'ar.json';

let currentLanguage = localStorage.getItem('language') || 'en'; // استرجاع اللغة من localStorage أو تعيين الإنجليزية كافتراضي

function toggleLanguage() {
  currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';

  localStorage.setItem('language', currentLanguage);
  
  const languageButton = document.getElementById('languageButton');
  languageButton.innerHTML = `
    ${currentLanguage === 'ar' ? 'English' : 'العربية'}
    <i class="fa-sharp fa-light fa-globe"></i>
  `;
  
  applyFont(currentLanguage);
  loadContent(currentLanguage);
}

function loadContent(language) {
  fetch(language === 'en' ? en : ar)
    .then(response => response.json())
    .then(data => {
      const staticElements = [
        'home', 'about', 'services', 'projects', 'contact', 'hello', 'name', 'title',
        'about_me', 'more_about_me', 'download_cv', 'who_am_i', 'about-me',
        'name0', 'phone', 'email', 'country', 'country2', 'tech_skills', 'education', 'education2',
        'contact_me', 'what_i', 'my_works', 'theme', 'serv', 'links', 'contactFooter', 'paraFooter',
        'website_design', 'website_design_des', 'leadership', 'leadership_des',
        'responsivity', 'responsivity_des', 'fast_typing', 'fast_typing_des', 
        'clean_code', 'clean_code_des', 'sass_coding', 'sass_coding_des', 
        'all', 'websites', 'webpages', 'tools', 'contact2', 'name2', 'job', 'cont_des',
        'serv1', 'serv2', 'serv3', 'serv4', 'link1', 'link2', 'link3', 'link4',
      ];

      staticElements.forEach(id => {
        document.getElementById(id).innerText = data[id];
      });

      // استدعاء بيانات المشاريع
      // for (let i = 1; i <= 17; i++) {
      //   document.getElementById(`project${i}-name`).innerText = data[`project${i}`].name;
      //   document.getElementById(`project${i}-features`).innerText = data[`project${i}`].features;
      //   if (data[`project${i}`].features) {
      //     const featuresList = document.getElementById(`project${i}-features`);
      //     data[`project${i}`].features.forEach(feature => {
      //       const listItem = document.createElement('li');
      //       listItem.innerText = feature;
      //       featuresList.appendChild(listItem);
      //     });
      //   }
      // }
    });
}

function applyFont(language) {
  const root = document.documentElement; 
  if (language === 'ar') {
    root.style.setProperty('--main-font', 'Cairo, sans-serif'); 
    root.style.direction = "rtl";
  } else {
    root.style.setProperty('--main-font', 'Fredoka, sans-serif'); 
    root.style.direction = "ltr";
  }
}

applyFont(currentLanguage);
loadContent(currentLanguage);
