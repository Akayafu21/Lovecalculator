const Checkbtn = document.getElementById("check");
const YourName = document.getElementById("yourName");
const YourCrush = document.getElementById("yourCrush");
const Heart = document.getElementById("img");
const Number = document.getElementById("show");

var ranNumber;

Checkbtn.addEventListener("click",()=>{
    let n = 0;
    let c = 0;
    if (YourName.value.trim() !=""){
        n = 1;
    }
    if (YourCrush.value.trim() != ""){
        c = 2;
    }
    if (c+n == 0){
        error(2);
    } else if (c+n == 1){
        error(1);
    } else if (c+n ==2){
        error(0);
    } else {
        randomNum();
        setEnvironment();
    }
})

YourName.addEventListener("focusout",()=>{
    if(YourName.value.trim() != ""){
        YourName.style.outline = "none";
    }
})

YourCrush.addEventListener("focusout",()=>{
    if(YourCrush.value.trim() != ""){
        YourCrush.style.outline = "none";
    }
})

randomNum = () =>{    
    let ran = (Math.random()*100).toFixed();
    console.log(ran);
    ranNumber = ran;
}

setEnvironment = ()=>{
    Heart.style.width = (ranNumber/100)*30+"rem";
    Heart.style.height = (ranNumber/100)*30+"rem";
    Number.innerHTML = ranNumber+"%";
    Number.style.fontSize = "60px";
}

error = (x) =>{
    if(x == 0){
        YourName.style.outline = "3px solid red";
    }else if(x == 1){
        YourCrush.style.outline = "3px solid red";
    }else{
        YourName.style.outline = "3px solid red";
        YourCrush.style.outline = "3px solid red";
    }
    
}


