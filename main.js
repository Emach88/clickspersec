count=0;
seconds=0;
url = "https://corsanywhere.heroku.app/https://vast-joey-59273.upstash.io"
let timerid;
function timer(){
  seconds=seconds+1;
  if(seconds==5){
    clearInterval(timerid);
    alert(count/seconds);
    score = count/seconds;
    element = document.getElementById("clicktarget").style.display = 'none';
    username= document.getElementById("username").value;
    request = fetch(url+'/set/'.username+'/'+score,{
      headers: {"Authorization": "Bearer AeeJAAIjcDExZjg5NWM0OTI1NDE0Y2M1YWNmMjY3NGEyMmMwZTQwMHAxMA"}
    })
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
