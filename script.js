const row_one = document.querySelector(".row1");
const r_1div = row_one.getElementsByTagName("div");
const xval = document.getElementById("x-axis");
const yval = document.getElementById("y-axis");


function doScale(){
    console.log(xval,yval);
    for(let i=0;i<=r_1div.length-1;i++){
        let x = xval.value;
        let y = yval.value;
        r_1div[i].style.transform = `scale(${x},${y})`;
    }
}


const row_two = document.querySelector(".row2");
const r_2div = row_two.getElementsByTagName("div");
const rotateButton = document.querySelector(".rotateBut");
let rotateVal = document.getElementById("rotate");
rotateButton.addEventListener("click",()=>{
    let val = String(rotateVal.value) + "deg"
  
    for(let i=0;i<=r_2div.length-1;i++){
        
        console.log(val);
        r_2div[i].style.transform = `rotate(${val})`;
    }
    
})

const row_three = document.querySelector(".row3");
const r_3div = row_one.getElementsByTagName("div");
const x_val = document.getElementById("skew-x-axis");
const y_val = document.getElementById("skew-y-axis");


function doSkew(){
   
    for(let i=0;i<=r_3div.length-1;i++){
        let x_one = String(x_val.value) + "deg";
        let y_ = String(y_val.value) + "deg";
        console.log(x_,y_);
        r_3div[i].style.transform = `skew(${x_one})`;
    }
}