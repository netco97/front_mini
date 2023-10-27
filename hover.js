const pokemongo_hover =  document.querySelector(".pokemongo_hover");
const p = document.querySelector(".pokemon_test");

pokemongo_hover.addEventListener("mouseenter",function(){
    p.style = 'color : red !important';
});

pokemongo_hover.addEventListener("mouseleave" , function(){
    p.style = 'color : black ! important';
});

const amiibo_hover =  document.querySelector(".amiibo_hover");
const a = document.querySelector(".amiibo_test");

amiibo_hover.addEventListener("mouseenter",function(){
    a.style = 'color : red !important';
});

amiibo_hover.addEventListener("mouseleave" , function(){
    a.style = 'color : black ! important';
});
