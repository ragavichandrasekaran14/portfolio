// ===============================
// PORTFOLIO LOADED
// ===============================

console.log("Portfolio Loaded Successfully 🚀");



// ===============================
// TYPING ANIMATION
// ===============================

const text =
"AI & Data Science Student | Startup Founder | Innovator";

let index = 0;

function typeText(){

    if(index < text.length){

        document.querySelector(".typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typeText,80);
    }
}

document.querySelector(".typing").innerHTML = "";

typeText();



// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn =
document.getElementById("theme-btn");

themeBtn.addEventListener(
"click",
()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML = "☀️";

    }

    else{

        themeBtn.innerHTML = "🌙";

    }

}
);



// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},
{
threshold:0.15
}

);



const hiddenElements =
document.querySelectorAll(

"section, .card, .project-card, .achievement-card, .stat-card, .timeline-item"

);


hiddenElements.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});



// ===============================
// PARTICLE BACKGROUND
// ===============================

tsParticles.load("particles-js", {

    fullScreen:false,

    background:{
        color:{
            value:"transparent"
        }
    },

    particles:{

        number:{
            value:70
        },

        color:{
            value:"#38bdf8"
        },

        links:{
            enable:true,
            color:"#38bdf8",
            distance:150
        },

        move:{
            enable:true,
            speed:2
        },

        opacity:{
            value:0.5
        },

        size:{
            value:3
        }

    }

});



// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");


window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach((section)=>{

const sectionTop =
section.offsetTop;

if(
pageYOffset >= sectionTop - 200
){

current = section.getAttribute("id");

}

});


navLinks.forEach((link)=>{

link.classList.remove("active");

if(
link.getAttribute("href") ===
"#" + current
){

link.classList.add("active");

}

});

}
);



// ===============================
// FLOATING PROJECT CARD EFFECT
// ===============================

const cards =
document.querySelectorAll(
".project-card"
);

cards.forEach((card)=>{

card.addEventListener(

"mousemove",

(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
(-1/5 * x + 20);

const rotateX =
(1/5 * y - 20);

card.style.transform =

`perspective(1000px)
rotateY(${rotateY}deg)
rotateX(${rotateX}deg)
scale(1.02)`;

}

);


card.addEventListener(

"mouseleave",

()=>{

card.style.transform =
"perspective(1000px) rotateY(0deg) rotateX(0deg)";

}

);

});



// ===============================
// ACHIEVEMENT CARD EFFECT
// ===============================

const achievementCards =
document.querySelectorAll(
".achievement-card"
);

achievementCards.forEach((card)=>{

card.addEventListener(

"mouseenter",

()=>{

card.style.boxShadow =
"0 25px 50px rgba(56,189,248,.4)";

}

);


card.addEventListener(

"mouseleave",

()=>{

card.style.boxShadow = "none";

}

);

});



// ===============================
// STATS COUNTER ANIMATION
// ===============================

const counters =
document.querySelectorAll(".stat-card h2");

counters.forEach((counter)=>{

const updateCounter = ()=>{

const target =
counter.innerText;

if(target.includes("₹75K+")){

counter.innerText = "₹75K+";

}

};

updateCounter();

});



// ===============================
// CONTACT FORM
// ===============================

const form =
document.querySelector("form");

form.addEventListener(

"submit",

(e)=>{

e.preventDefault();

alert(
"Thank you for contacting me! 🚀"
);

form.reset();

}

);



// ===============================
// SMOOTH HERO IMAGE GLOW
// ===============================

const profileImage =
document.querySelector(
".floating-image img"
);

let glow = true;

setInterval(()=>{

if(glow){

profileImage.style.boxShadow =
"0 0 40px #38bdf8,0 0 100px #2563eb";

}

else{

profileImage.style.boxShadow =
"0 0 20px #38bdf8,0 0 60px #2563eb";

}

glow = !glow;

},1500);



// ===============================
// END
// ===============================

console.log(
"Premium Portfolio Ready ✅"
);