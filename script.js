const buttons=document.querySelectorAll("button");
const bulb=document.querySelector(".bulb");

// calling functions
buttons.forEach((button)=>{
    button.addEventListener('click',( )=>{

        oneButtonDown(button);
        changingColour(button)

    })
    glowEffect(button);
})


// only one button pressed at a time 
function oneButtonDown(button){
    // 
    buttons.forEach((button)=>{
        button.classList.remove("BtnDown");
    })
    // 
    button.classList.add("BtnDown");
}


// changing colour
function changingColour(button){
    switch (button.innerHTML){
        case ("Red") : bulb.style.backgroundColor="crimson";
        break;
        case ("Yellow") : bulb.style.backgroundColor="orange";
        break;
        case ("Green") : bulb.style.backgroundColor="springgreen";
        break;
        case ("OFF") : bulb.style.backgroundColor="rgb(100,116,139)";
        break;
    }
}


// glow effect  only in ON state
function glowEffect(button){
    button.addEventListener('click',( )=>{
        if (button.classList.contains("on")){
            bulb.classList.add("glow");
        } else{
            bulb.classList.remove("glow");
        }
    }) 
}

