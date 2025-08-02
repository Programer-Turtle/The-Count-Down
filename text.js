let TextArea = document.getElementById("textArea")
let TimeChangeInterval = setInterval(setText, 1)
let AnimationInterval
let timeAnimation = 0

let TheDay = new Date(2025, 7, 24);
console.log(TheDay)
let text = document.getElementById("CountDownText")

function FlipDisplay(){
    if(text.style.display == "block"){
        text.style.display = "none"
    }
    else{
        text.style.display = "block"
    }
    timeAnimation++
    if(timeAnimation == 5){
        clearInterval(AnimationInterval)
        setTimeout(() => {
            text.style.opacity = 0
            setTimeout(() =>{
                text.innerText = "It's Time"
                text.style.opacity = 100
            }, 1500)
        }, 1000)
    }
}

function GetDaysTil(){
    let currentDate = new Date();
    timeDiff = TheDay.getTime() - currentDate.getTime()

    let Days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let Hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let Minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let Seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    let Milliseconds = Math.floor((timeDiff % (1000)));
    if([Days,Hours,Minutes,Seconds,Milliseconds].every(time => time <= 1)){
        Days = "00"
        Hours = "00"
        Minutes = "00"
        Seconds = "00"
        Milliseconds = "000"
        clearInterval(TimeChangeInterval)
        text.style.display = "none"
        AnimationInterval = setInterval(FlipDisplay, 1000)
    }

    if(`${Days}`.length < 2){
        Days = `0${Days}`
    }
    if(`${Hours}`.length < 2){
        Hours = `0${Hours}`
    }
    if(`${Minutes}`.length < 2){
        Minutes = `0${Minutes}`
    }
    if(`${Seconds}`.length < 2){
        Seconds = `0${Seconds}`
    }
    if(`${Milliseconds}`.length < 2){
        Milliseconds = `00${Milliseconds}`
    }
    else if(`${Milliseconds}`.length < 3){
        Milliseconds = `0${Milliseconds}`
    }

    return `${Days}:${Hours}:${Minutes}:${Seconds}:${Milliseconds}`
}

function setText(){
    
    console.log("Cheese")
    text.innerText =  GetDaysTil()
}

function RequestFullScreen(){
    document.documentElement.requestFullscreen();
    document.body.removeEventListener("click", RequestFullScreen)
}

document.body.addEventListener("click", RequestFullScreen)