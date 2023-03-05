 $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:2000,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
}) 
/**/
let updateBar = document.querySelector(".carsoule-bar")
let scrollLeft = updateBar.scrollWidth - 1485
let root = document.documentElement
root.style.setProperty("--sliderwidth" , "-" + document.querySelector(".top-update-bar").offsetWidth + "px");
root.style.setProperty("--window-width" , window.innerWidth + "px");

if (scrollLeft < 2000){
    $(".top-update-bar").css("animation-duration" , "10s" ) 
}
else if(scrollLeft < 4000){
    $(".top-update-bar").css("animation-duration" , "50s" ) 

}
else if(scrollLeft < 6000){
    $(".top-update-bar").css("animation-duration" , "80s" ) 

}
else{
    $(".top-update-bar").css("animation-duration" , "110s" ) 
}
$(".dropdown .btn").click(() => {
    $(".dropdown-mode").slideToggle();

})
$(".sidebarbtn").click(() => {
    $("main").toggleClass("mainmovement");
    $("main").css("display" , "block")
})

$(".sidebar").mouseleave(() => {
    $("main").removeClass("mainmovement");
})
$(".lightmode").click(() => {
    $("body").removeClass("darkpage")
    $("body").addClass("lightpage")
})
$(".darkmode").click(() => {
    $("body").removeClass("lightpage")
    $("body").addClass("darkpage")
})
/**/
let items = $(".item")
items.mouseover(function(){
    $('.owl-carousel').trigger('stop.owl.autoplay');
    $(this)[0].children[0].style.opacity = "0";
    $(this)[0].children[1].style.opacity = "0";
    $(this)[0].children[2].play()
})
items.mouseleave(function(){
    $('.owl-carousel').trigger('play.owl.autoplay');
    $(this)[0].children[0].style.opacity = "1";
    $(this)[0].children[1].style.opacity = "1";
    $(this)[0].children[2].pause()
})
