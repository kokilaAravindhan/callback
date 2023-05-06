/*console.log("App is under starting..")
setTimeout(function timer() {
    console.log('App is under construction..');    
}, 2000);

console.log("App is under deployment");

setTimeout(function timeout() {
console.log("App is under testing");
}, 5000);

setTimeout(function bye() {
    console.log('App is under construction..this is for bye');    
}, 3000);

console.log("Welcome to App.");*/



var h1=document.createElement("h1");
h1.style.color="red";
h1.style.padding="100px";
h1.style.textAlign="center"
setTimeout(()=>{
   h1.innerHTML="10";
},1000);

setTimeout(()=>{
    h1.innerHTML="9";
 },2000);
 
 setTimeout(()=>{
    h1.innerHTML="8";
 },3000);
 
 setTimeout(()=>{
    h1.innerHTML="7";
 },4000);

 setTimeout(()=>{
    h1.innerHTML="6";
 },5000);
 setTimeout(()=>{
    h1.innerHTML="5";
 },6000);

 setTimeout(()=>{
    h1.innerHTML="4";
 },7000);

 setTimeout(()=>{
    h1.innerHTML="3";
 },8000);

 setTimeout(()=>{
    h1.innerHTML="2";
 },9000);

 setTimeout(()=>{
    h1.innerHTML="1";
 },10000);

 setTimeout(()=>{
    h1.innerHTML="Happy Independence Day !!!";
 },11000);
document.body.append(h1);

