function myTimer() {
    const date = new Date();
    let todayDate = date.getDate();
  
    let dayArr = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
    ];
  
    let day = dayArr[date.getDay()];
  
    let months = [
      "January","Feburary","March","April","May","June","July","August","September","October","November","December",
    ];
  
    let month = months[date.getMonth()];
  
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timePeriod ;
  
    if  (hours >= 12){
      timePeriod = "PM"
    }else{
      timePeriod = "AM"
    }
    if (hours >= 12){
      hours = hours % 12
    }else{
      hours = hours
    }
    if (hours === 0 ){
      hours = 12
    }else{
      hours = hours
    }
    if (minutes <= 9) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes;
    }
    if (seconds <= 9) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds;
    }
  
    document.getElementById("date").innerHTML =
      "<h2 class='date'> DATE : " +day +",  " +month +" " +todayDate +", " +year +"<br>TIME : " +hours +" : " +minutes +" : " +seconds + " " + timePeriod +"</h2>";
  }
  setInterval(myTimer, 1000);