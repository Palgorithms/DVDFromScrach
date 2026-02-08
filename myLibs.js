
const DVD = document.getElementById("DVDHolder");
const container = document.getElementById("container");
let dir = "LU";
const colors = ["red","pink","green","blue","white","yellow","orange"];
const speed = 3;

function Animate(){
    if(dir == "RD"){
        DVD.style.left = DVD.getBoundingClientRect().left + speed + "px";
        DVD.style.top = DVD.getBoundingClientRect().top + speed + "px";
        if(DVD.getBoundingClientRect().bottom >= container.clientHeight){
            dir = "RU";ChnageColor()
        }
        else if(DVD.getBoundingClientRect().right >= container.clientWidth){
            dir = "LD";ChnageColor()
        }
    }
    else if(dir == "LD"){
        DVD.style.left = DVD.getBoundingClientRect().left - speed + "px";
        DVD.style.top = DVD.getBoundingClientRect().top + speed + "px";
        if(DVD.getBoundingClientRect().bottom >= container.clientHeight){
            dir = "LU";ChnageColor()
        }
        else if(DVD.getBoundingClientRect().left <= 0){
            dir = "RD";ChnageColor()
        }
    }
    else if(dir == "RU"){
        DVD.style.left = DVD.getBoundingClientRect().left + speed + "px";
        DVD.style.top = DVD.getBoundingClientRect().top - speed + "px";
        if(DVD.getBoundingClientRect().top <= 0){
            dir = "RD";ChnageColor()
        }
        else if(DVD.getBoundingClientRect().right >= container.clientWidth){
            dir = "LU";ChnageColor()
        }
    }
    else if(dir == "LU"){
        DVD.style.left = DVD.getBoundingClientRect().left - speed + "px";
        DVD.style.top = DVD.getBoundingClientRect().top - speed + "px";
        if(DVD.getBoundingClientRect().top <= 0){
            dir = "LD";ChnageColor()
        }
        else if(DVD.getBoundingClientRect().left <= 0){
            dir = "RU";ChnageColor()
        }
    }
    requestAnimationFrame(Animate);
}
Animate();

function ChnageColor(){
    DVD.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}