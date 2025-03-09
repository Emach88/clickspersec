count=0;
seconds=0;
let timerid;
function timer(){
  seconds=seconds+1;
  if(seconds==5){
    clearInterval(timerid);
    alert(count/seconds);
    element = document.getElementById("clicktarget").style.display = 'none';
    
  }
}
function countclick(){
  count=count+1;
  document.getElementById("clicktarget").textContent=count;
  console.log(count);
  if(count==1){
    timerid = setInterval(timer, 1000);
  }
}
function reset(){
  document.getElementById("clicktarget").style.display = 'block';
  count=0;
  seconds=0;
  
}
