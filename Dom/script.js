var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var light = 0;
btn.addEventListener("click",function(){
        if(light == 0){
            bulb.style.backgroundColor = "yellow";
            console.log("clicked")
            light = 1;
        }else {
        bulb.style.backgroundColor = "transparent";
        light = 0;
        }
})