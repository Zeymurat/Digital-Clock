function getTime(){
    var now=new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    var day = now.getDate();
    if(day<10){day="0"+day;}
    var month = now.getMonth()+1;
    if(month<10){month="0"+month;}
    var year = now.getFullYear();

    (hour<10)? document.getElementById("hour").innerText ="0"+hour:
               document.getElementById("hour").innerText = hour;
    (min<10)? document.getElementById("minute").innerText ="0"+min:
              document.getElementById("minute").innerText = min;
    (sec<10)? document.getElementById("second").innerText ="0"+sec:
              document.getElementById("second").innerText = sec;
    document.getElementById("date").innerText = day + " / " + month + " / " + year;

}

setInterval(function(){getTime();},1000)