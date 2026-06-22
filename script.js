
console.log(
"Ragavi Portfolio Loaded 🚀"
);



const text =
"AI & Data Science Student | Startup Founder | AI Product Manager";


let i=0;


function typing(){


if(i<text.length){

document.querySelector(".hero p").innerHTML += text.charAt(i);

i++;

setTimeout(typing,50);

}


}


document.querySelector(".hero p").innerHTML="";

typing();





// Scroll animation


const sections =
document.querySelectorAll("section");



window.addEventListener(
"scroll",
()=>{


sections.forEach(sec=>{


let top =
sec.getBoundingClientRect().top;



if(top < window.innerHeight-100){


sec.style.opacity=1;

sec.style.transform="translateY(0)";


}


});


});




sections.forEach(sec=>{


sec.style.opacity=0;

sec.style.transform=
"translateY(80px)";


sec.style.transition="1s";


});