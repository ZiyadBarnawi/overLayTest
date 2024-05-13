"use strict"
var hiddens=document.querySelectorAll(".hidden");
    var box=hiddens[0]
    var overlay=hiddens[1]

function display(){


// var hiddens=document.querySelectorAll(".hidden");
var box=hiddens[0]
var overlay=hiddens[1]

box.classList.remove("hidden")
overlay.classList.remove("hidden")
}

function undisplay(){

    // var hiddens=document.querySelectorAll(".hidden");
    var box=hiddens[0]
    var overlay=hiddens[1]
    console.log(hiddens)
    // var box=document.getElementById("box");
    // var overlay=document.getElementById("overlay");
    
    box.classList.add("hidden")
    overlay.classList.add("hidden")
}

document.addEventListener("keydown",function(e){
    console.log(e);
    if(e.key==="Escape")
    {
    var box=hiddens[0]
    var overlay=hiddens[1]
    box.classList.add("hidden")
    overlay.classList.add("hidden")
    }
})