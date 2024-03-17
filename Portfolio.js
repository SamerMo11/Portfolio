
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
    document.body.style.background=' #000000e3';
    this.style.display='none';
    sunn.style.display='block';

})

sunn.addEventListener('click', function(){

    document.body.classList.add('light');
    document.body.style.background=' #e2e4e7';

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
    let revealpoint = 100;

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
    let revealpointttt = 100;

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
    let revealpointt = 100;

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
    let revealpointtt = 100;
    
    if(revealtoppp < windowheight - revealpointtt){
      rights[r].classList.add('active');
    }
    else{
      rights[r].classList.remove('active');
    }
  }
}
// ------------------------------------------

let feed = document.getElementById('btn-feed2');
let feed2 = document.getElementById('btn-feed3');
let thxx = document.getElementById('thx');
let txtarea = document.getElementById('txt-area');
let emailfeed = document.getElementById('email-feed');
let namefeed = document.getElementById('name-feed');
let done = document.getElementById('done');
let done2 = document.getElementById('done2');



feed2.onclick = function(){

    feed2.style.display='none';
    txtarea.value='';
    emailfeed.value='';
    namefeed.value='';  
}


feed.onclick = function(){
    
    feed.style.display='none';
    feed2.style.display='block';
    thxx.style.display='block';
    txtarea.value='';
    emailfeed.value='';
    namefeed.value='';
}
done.onclick = function(){
    done2.value='';
}



