const row_one = document.querySelector(".row1");
const r_1div = row_one.getElementsByTagName("div");
const xval = document.getElementById("x-axis");
const yval = document.getElementById("y-axis");


function doScale(){
    console.log(xval,yval);
    for(let i=0;i<=r_1div.length-1;i++){
        let x = xval.value;
        let y = yval.value;
        if(x && y){
            r_1div[i].style.transform = `scale(${x},${y})`;
        }
        else if(!y){
            r_1div[i].style.transform = `scaleX(${x})`;
        }
        else if(!x){
            r_1div[i].style.transform = `scaleY(${y})`;
        }
        
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
const r_3div = row_three.getElementsByTagName("div");
const x_val = document.getElementById("skew-x-axis");
const y_val = document.getElementById("skew-y-axis");


function doSkew(){
   
    for(let i=0;i<=r_3div.length-1;i++){
        let x_one = String(x_val.value) + "deg";
        let y_two = String(y_val.value) + "deg";
    if(x_one && y_two){
            r_3div[i].style.transform = `skew(${x_one},${y_two})`;
        }
        else if(!y_two){
            r_3div[i].style.transform = `skewX(${x_one})`;
        }
        else if(!x_one){
            r_3div[i].style.transform = `skewY(${y_two})`;
        }
    }
}



const row_four = document.querySelector(".row4");
const r_4div = row_four.getElementsByTagName("div");
const x_ = document.getElementById("trans-x-axis");
const y_ = document.getElementById("trans-y-axis");

function doTranslate(){
    for(let i=0;i<=r_4div.length-1;i++){
        let x_one = String(x_.value) + "px";
        let y_two = String(y_.value) + "px";
    if(x_one && y_two){
            r_4div[i].style.transform = `translate(${x_one},${y_two})`;
        }
        else if(!y_two){
            r_4div[i].style.transform = `translateX(${x_one})`;
        }
        else if(!x_one){
            r_4div[i].style.transform = `translateY(${y_two})`;
        }
    }
}

const row_five = document.querySelector(".row5");
const r_5div = row_five.getElementsByTagName("div");
const a_ = document.getElementById("mat-a");
const b_ = document.getElementById("mat-b");
const c_ = document.getElementById("mat-c");
const d_ = document.getElementById("mat-d");
const tx_ = document.getElementById("mat-tx");
const ty_ = document.getElementById("mat-ty");

function doMatrix(){
    let a = a_.value;
    let b = b_.value;
    let c = c_.value;
    let d = d_.value;
    let tx = tx_.value;
    let ty = ty_.value;
    for(let i=0;i<= r_5div.length-1;i++){
        // r_5div[i].style.transform = "matrix(2,2deg,5deg,4,23,33)";
        r_5div[i].style.transform = `matrix(${a},${b},${c},${d},${tx},${ty})`;
    }
}
