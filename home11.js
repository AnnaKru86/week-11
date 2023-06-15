let a=document.getElementById("price_marakas").textContent;
let b=document.getElementById ("price_pyramid").textContent;
let c=document.getElementById ("price_xylophone").textContent;   

function sum (){
result= (Number(a)+Number(b)+Number(c))*0.2;
   document.getElementById ("sum").value=result;
}
