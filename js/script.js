let reveal= document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{
       
    for(let i=0; i < reveal.length; i ++){
        console.log(reveal[i]);

        let windowHeight=window.innerHeight;
        let revealTop= reveal[i].getBoundingClientRect().top;
        revealPoint=100;

        if(revealTop < windowHeight - revealPoint){
           reveal[i].classList.add("active");
        }
        else{
            reveal[i].classList.remove("active")
        }
    }
})


// FOOTER YEAR
const years= document.querySelector(".year");

let futureDate= new Date().getFullYear();
years.innerHTML=futureDate;