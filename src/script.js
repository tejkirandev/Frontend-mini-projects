let weight=document.getElementById("weight");
let height=document.getElementById("height");
let btn=document.querySelector("button")
let result=document.querySelector("h4");

btn.addEventListener("click",()=>{

    calcBMI();
})

function calcBMI(){
   let w=weight.value;
   let h=height.value/100;
   let bmi=w/(h*h);
   result.innerText=bmi.toFixed(2)+" kg/m2";


}