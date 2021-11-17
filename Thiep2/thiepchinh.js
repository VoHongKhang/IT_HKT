var modal = document.querySelector(".modal");
var modal1 = document.querySelector(".modal1");
var modal2 = document.querySelector(".modal2");
var modalContent = document.querySelector(".modal--content");
var modalContent1 = document.querySelector(".modal--content1");
var modalContent2 = document.querySelector(".modal--content2");
var ContentItems =document.querySelectorAll(".content--item");
var video = document.querySelector(".video");
var video1 = document.querySelector(".video1");
ContentItems[0].onclick = function(){
    modal.classList.toggle("active");
    video1.src ="../Thiep2/videochucmung2.mp4";
    video1.autoplay = true;
    video1.volume = 0.5;
}
ContentItems[1].onclick = function(){
    modal1.classList.toggle("active");
}
ContentItems[2].onclick = function(){
    modal2.classList.toggle("active");
    video.src ="../Thiep2/videochucmung.mp4";
    video.autoplay = true;
}   
modal.onclick = function(){
    modal.classList.remove("active");
    video1.src = " ";
}
modal1.onclick = function(){
    modal1.classList.remove("active");
}
modal2.onclick = function(){
     modal2.classList.remove("active");
     video.src = " ";
}
modalContent.onclick = function(e){
    e.stopPropagation();
    video1.src = " ";
}
modalContent1.onclick = function(e){
    e.stopPropagation();
}
modalContent2.onclick = function(e){
    e.stopPropagation();
    video.src = " ";
}
