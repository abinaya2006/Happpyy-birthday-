let btn=document.getElementById('wish-btn')
let progressbar=document.getElementById('progressbar')
let flame1=document.getElementById('flame1')
let flame2 = document.getElementById("flame2");
let flame3 = document.getElementById("flame3");
let balloons=document.getElementById("balloons")
let meme=document.getElementById("meme")
let msgbox=document.getElementById("msg-box")

let isBlown=false
let timer=null
let progress=0
let opacity=1

function start(e){
    if (isBlown) return;

    e.preventDefault()
    timer=setInterval(()=>{
        progress+=1
        opacity-=0.0096
        progressbar.style.width=progress + "%"
        flame1.style.opacity=opacity
        flame2.style.opacity = opacity;
        flame3.style.opacity = opacity;
        
        if(progress>=100){
            blow();
            clearInterval(timer)
        }
    },30)
}

function blow(){
    isBlown=true
    document.body.classList.add("party");
    flame1.style.opacity=0
    flame2.style.opacity = 0;
    flame3.style.opacity = 0;
    meme.classList.add("show");
    setTimeout(() => {
    balloons.classList.remove("hidden");
    msgbox.classList.remove("hidden");
    
    }, 2000);

}

function stop(){
    clearInterval(timer)

    if(isBlown) return

    progress=0
    opacity=1
    progressbar.style.width='0%'
    flame1.style.opacity = opacity;
    flame2.style.opacity = opacity;
    flame3.style.opacity = opacity;

}


btn.addEventListener('mousedown',start)
btn.addEventListener('mouseup',stop)
