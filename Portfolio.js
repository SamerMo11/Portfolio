
// let user = {
//     firstname:'samer',
//     secondname:'mohamed',
//     email:'samermohamed@gmail.com',
//     age:20,
//     skills:['html','css','js'],
//     active:'yes',
//     phonenumber:{
//         first: '011111111',
//         second: '022222222',
//     },
//     adress:{
//         egypt:'damanhour',
//         abroad:'paris',
//     },
//     isActive:function(){
//         if(user.active==='yes'){
//             return 'hello user'
//         } else{
//             return 'sorry'
//         }
//     },
//     ageAccess:function(){
//         if(user.age >= 20){
//             return 'ok join us'
//         } else {
//             return 'sorry you are too young'
//         }
//     },

// };
// // لو عايز اوصل ل فانكشن
// console.log(user.ageAccess())
// //  لو عايز اوصل ل بروبيرتي عادية 
// console.log(user.firstname)



// let container = document.getElementById('container')

// container.innerHTML=('<h1>SAMER MOHAMED</h1>')
// container.style.color='red'
// container.style.border='solid 3px red'
// container.style.borderRadius='20px'
// container.style.display='flex'
// container.style.justifyContent='center'
// container.style.alignContent='center'
// container.style.backgroundColor='black'
// container.style.padding="50px"
// container.style.removeProperty('color','backgroundColor')
// -----------------------------------------------
// container.style.cssText= `
//     color:#fff;
//     background-color:black
// // `
// -------------------------------------------/

// container.style.setProperty('color','red')

// --------------------------------------------------
// --------------------------------------------------

// let container = document.createElement('div');
// let head = document.createElement('h1');
// let img = document.createElement('img');

// let content = document.createTextNode('Hello Samer')
// head.appendChild(content);
// img.src='samer.jpg'

// container.appendChild(head);
// container.appendChild(img);


// img.style.height='200px'
// container.style.backgroundColor='red'
// container.style.textAlign='center'

// document.body.appendChild(container)


// --------------------------------------------------
// --------------------------------------------------

// let names=['samer','ali','ahmed'];
// let ages=['18','19','20'];


// let container = document.createElement('div');
// document.body.appendChild(container);
// container.style.textAlign='center';

// function samer(names,ages)
// {
//     let card = document.createElement('div');
//     let title = document.createElement('h1');
//     let age = document.createElement('p');
//     let img = document.createElement('img');

//     let namecontent = document.createTextNode(names);
//     let agecontent = document.createTextNode(ages);
//     img.src='samer.jpg';

//     title.appendChild(namecontent);
//     age.appendChild(agecontent);

//     card.appendChild(title);
//     card.appendChild(age);
//     card.appendChild(img);


// card.style.width='200px'
// card.style.backgroundColor='#444'
// card.style.color='#fff'
// card.style.padding='10px'
// card.style.margin='10px'
// card.style.display='inline-block'
// img.style.width='100%'

//     container.appendChild(card);
// }

// for( let i = 0 ; i < 3 ; i++ ){
//     samer(names[i],ages[i]);
// }

// --------------------------------------------------
// --------------------------------------------------






// How to Access Class Element

    // btn.addEventListener('click', function(){
    // document.querySelector('.light1').style.color='black ';})
    // btn.addEventListener('click', function(){
    // document.querySelector('.light2').style.color='black ';})
    // btn.addEventListener('click', function(){
    // document.querySelector('.light3').style.color='black ';})
    // btn.addEventListener('click', function(){
    // document.querySelector('.light4').style.color='black ';})
    // btn.addEventListener('click', function(){
    // document.querySelector('.light5').style.color='black ';})
    

// ----------------------------------------------------------
// ----------------------------------------------------------


// ------------------------------------------------------
// ------------------------------------------------------
// let toggle = document.querySelector('.toggle');
// let nav = document.querySelector('.nav');

// function togglemenu(){
//     toggle.classList.toggle('active');
//     nav.classList.toggle('active');
// }

// let btnopen = document.getElementById('open')
// let btnclose = document.getElementById('close')
// let container = document.getElementById('bar')




// btnopen.onclick = function(){

//     container.style.display='block';
//     btnclose.style.display='block';
//     this.style.display='none';
// }

// btnclose.onclick = function(){

//     container.style.display='none';
//     btnopen.style.display='block';
//     this.style.display='none';
// }

// window.onload = function(){
//     btnclose.classList.add('hide')
//     container.classList.add('hide')
// }









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

// let div = document.getElementById('feed');
// let text = document.getElementById('txt');
let feed = document.getElementById('btn-feed2');
let thxx = document.getElementById('thx');


feed.onclick = function(){
    
    feed.classList.add('hide');
    thxx.style.display='inline-block';
}

// ------------------------------------------
