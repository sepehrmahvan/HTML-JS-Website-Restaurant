let menu = document.querySelector("div.menu-button i");
let header = document.querySelector("header.menu");
let flag=true;

menu.addEventListener("click", changeMenu);

function changeMenu(){
    header.classList.toggle("change");
    if(flag){
        menu.classList.remove("fa-sharp","fa-solid","fa-bars");
        menu.classList.add("fa-solid","fa-xmark");
        flag = false;
        
    }
    else{
        menu.classList.remove("fa-solid","fa-xmark");
        menu.classList.add("fa-sharp","fa-solid","fa-bars");
        flag = true;
        
    }
    
    console.log(flag);
    

}

// drop down ------------------------------------------------


let a_parent =  document.querySelectorAll(".a_parent");
let dd_menu_a = document.querySelectorAll(".dd_menu_a");

a_parent.forEach(function(aitem){

		aitem.addEventListener("mouseenter", function(){
			a_parent.forEach(function(aitem){
				aitem.classList.remove("active");
			})
			dd_menu_a.forEach(function(dd_menu_item){
				dd_menu_item.classList.remove("active");
			})
			aitem.classList.add("active");
		})
})

// slide show

 let i=0;
 let slides=document.querySelectorAll("div.my-slide");

 let prev = document.querySelector("div.prev");
 let next = document.querySelector("div.next");

 next.addEventListener("click",nextSlide);
 prev.addEventListener("click",prevSlide);

 function nextSlide(){
    clearInterval(time);
    changeSlide();
 }

 function prevSlide(){
    clearInterval(time);
    changePrevSlide();
 }

 let time = setInterval(changeSlide,4000);
 slides[i].classList.remove("d-none");

 function changePrevSlide(){
    i--;
    if(i<0){
        i=slides.length-1;
    }
    console.log(i);
    for(let i=0 ; i<slides.length; i++){
        slides[i].classList.add("d-none");
    }

    slides[i].classList.remove("d-none");
 }

 function changeSlide(){
    i++
    if(i>slides.length-1){
        i=0
    }
    for (let i=0 ; i<slides.length; i++){
        slides[i].classList.add("d-none");
    }

    slides[i].classList.remove("d-none");
 }

//  section

let headerRow = document.querySelector("header");
let left = document.querySelector("div.hot-sale-left");
let right = document.querySelector("div.hot-sale-right");
let legendAnime = document.querySelector("div.legend div.left");
let legendRightAnime = document.querySelector("div.legend div.right");
// discover
let burger = document.querySelector("div.discover div.discover-burger");
let dessert= document.querySelector("div.discover div.discover-dessert");
let drink= document.querySelector("div.discover div.discover-drink");
let pasta= document.querySelector("div.discover div.discover-pasta");
let discover = document.querySelector("div.discover div.discover-menu");
let salad= document.querySelector("div.discover div.discover-salad");
let blog = document.querySelector("div.blog");

window.addEventListener("scroll", change);

function change(){
    console.log(window.scrollY);
    if(window.scrollY>150){
        headerRow.classList.add("background-change");
    }
    if(window.scrollY<150){
        headerRow.classList.remove("background-change");
    }
    if(window.scrollY>450){
        left.classList.add("left-anime");
        right.classList.add("right-anime");
    }
    if(window.scrollY<1300){
        left.classList.add("left-anime");
        right.classList.add("right-anime");
    }
    if(window.scrollY>1300){
        left.classList.remove("left-anime");
        right.classList.remove("right-anime");
    }
    if(window.scrollY<450){
        left.classList.remove("left-anime");
        right.classList.remove("right-anime");
    }
    if(window.scrollY>1000){
        legendAnime.classList.add("left-anime");
    }
    if(window.scrollY>1000){
        legendRightAnime.classList.add("right-anime");
    }
    if(window.scrollY<1000){
        legendAnime.classList.remove("left-anime");
    }
    if(window.scrollY<1100){
        legendRightAnime.classList.remove("right-anime");
    }
    if(window.scrollY>2150){
        legendAnime.classList.remove("left-anime");
    }
    if(window.scrollY>2150){
        legendRightAnime.classList.remove("right-anime");
    }
    if(window.scrollY>2100){
        discover.classList.add("discover-anime");
        burger.classList.add("discover-anime");
        dessert.classList.add("discover-anime");
        drink.classList.add("discover-anime");
        pasta.classList.add("discover-anime");
        salad.classList.add("discover-anime");
    }
    if(window.scrollY>2500){
        discover.classList.add("discover-anime-2");
        burger.classList.add("discover-anime-2");
        dessert.classList.add("discover-anime-2");
        drink.classList.add("discover-anime-2");
        pasta.classList.add("discover-anime-2");
        salad.classList.add("discover-anime-2");
    }
    if(window.scrollY<1900){
        discover.classList.remove("discover-anime");
        burger.classList.remove("discover-anime");
        dessert.classList.remove("discover-anime");
        drink.classList.remove("discover-anime");
        pasta.classList.remove("discover-anime");
        salad.classList.remove("discover-anime");
    }
    if(window.scrollY<2300){
        discover.classList.remove("discover-anime-2");
        burger.classList.remove("discover-anime-2");
        dessert.classList.remove("discover-anime-2");
        drink.classList.remove("discover-anime-2");
        pasta.classList.remove("discover-anime-2");
        salad.classList.remove("discover-anime-2");
    }
    if(window.scrollY>2800){
        discover.classList.remove("discover-anime");
        burger.classList.remove("discover-anime");
        dessert.classList.remove("discover-anime");
        drink.classList.remove("discover-anime");
        pasta.classList.remove("discover-anime");
        salad.classList.remove("discover-anime");
    }
    if(window.scrollY>3200){
        discover.classList.remove("discover-anime-2");
        burger.classList.remove("discover-anime-2");
        dessert.classList.remove("discover-anime-2");
        drink.classList.remove("discover-anime-2");
        pasta.classList.remove("discover-anime-2");
        salad.classList.remove("discover-anime-2");
    }
    if(window.scrollY>3100){
        blog.classList.add("blog-animation");
    }
    if(window.scrollY<3050){
        blog.classList.remove("blog-animation");
    }
    if(window.scrollY>4100){
        blog.classList.remove("blog-animation");
    }
}


let burgerLink = document.querySelector("div.discover a.burger-link");
let dessertLink = document.querySelector("div.discover a.dessert-link");
let drinkLink = document.querySelector("div.discover a.drink-link");
let pastaLink = document.querySelector("div.discover a.pasta-link");
let pizzaLink = document.querySelector("div.discover a.pizza-link");
let saladLink = document.querySelector("div.discover a.salad-link");

burgerLink.addEventListener("click",burgerF);
dessertLink.addEventListener("click",dessertF);
drinkLink.addEventListener("click",drinkF);
pastaLink.addEventListener("click",pastaF);
pizzaLink.addEventListener("click",pizzaF);
saladLink.addEventListener("click",saladF);

function burgerF(){
    burger.classList.remove("d-none");
    burgerLink.classList.add("active");
    dessertLink.classList.remove("active");
    drinkLink.classList.remove("active");
    pastaLink.classList.remove("active");
    pizzaLink.classList.remove("active");
    saladLink.classList.remove("active");
    dessert.classList.add("d-none");
    drink.classList.add("d-none");
    pasta.classList.add("d-none");
    discover.classList.add("d-none");
    salad.classList.add("d-none");
}
function dessertF(){
    dessert.classList.remove("d-none");
    dessertLink.classList.add("active");
    burgerLink.classList.remove("active");
    drinkLink.classList.remove("active");
    pastaLink.classList.remove("active");
    pizzaLink.classList.remove("active");
    saladLink.classList.remove("active");
    burger.classList.add("d-none");
    drink.classList.add("d-none");
    pasta.classList.add("d-none");
    discover.classList.add("d-none");
    salad.classList.add("d-none");
}
function drinkF(){
    drink.classList.remove("d-none");
    drinkLink.classList.add("active");
    burgerLink.classList.remove("active");
    dessertLink.classList.remove("active");
    pastaLink.classList.remove("active");
    pizzaLink.classList.remove("active");
    saladLink.classList.remove("active");
    burger.classList.add("d-none");
    dessert.classList.add("d-none");
    pasta.classList.add("d-none");
    discover.classList.add("d-none");
    salad.classList.add("d-none");
}
function pastaF(){
    pasta.classList.remove("d-none");
    pastaLink.classList.add("active");
    burgerLink.classList.remove("active");
    dessertLink.classList.remove("active");
    drinkLink.classList.remove("active");
    pizzaLink.classList.remove("active");
    saladLink.classList.remove("active");
    burger.classList.add("d-none");
    dessert.classList.add("d-none");
    drink.classList.add("d-none");
    discover.classList.add("d-none");
    salad.classList.add("d-none");
}
function saladF(){
    salad.classList.remove("d-none");
    saladLink.classList.add("active");
    burgerLink.classList.remove("active");
    dessertLink.classList.remove("active");
    drinkLink.classList.remove("active");
    pizzaLink.classList.remove("active");
    pastaLink.classList.remove("active");
    burger.classList.add("d-none");
    dessert.classList.add("d-none");
    drink.classList.add("d-none");
    discover.classList.add("d-none");
    pasta.classList.add("d-none");

}
function pizzaF(){
    discover.classList.remove("d-none");
    pizzaLink.classList.add("active");
    burgerLink.classList.remove("active");
    dessertLink.classList.remove("active");
    drinkLink.classList.remove("active");
    saladLink.classList.remove("active");
    pastaLink.classList.remove("active");
    burger.classList.add("d-none");
    dessert.classList.add("d-none");
    drink.classList.add("d-none");
    salad.classList.add("d-none");
    pasta.classList.add("d-none");
}


