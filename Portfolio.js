
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



// ------------------------------------------
