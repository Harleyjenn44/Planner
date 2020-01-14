var date_time = document.getElementById("date_time");
date_time.textContent = moment().format('dddd, ' + 'MMMM Do, YYYY');

var savedPlans = document.querySelectorAll(".plans")
for (var i = 0; i < savedPlans.length; i++) {
  var currentPlan = savedPlans[i];
  var specificTime = $(currentPlan).attr("id");
  $(currentPlan).val(localStorage.getItem(specificTime));
}


var event = document.querySelectorAll(".event");
for (var i = 0; i < event.length; i++) {
  event[i].addEventListener("click", function () {
    var input = $(this).siblings(".plans");
    var time = $(input).attr("id");
    var plan = $(input).val()
    localStorage.setItem(time, plan);

  })
}
var hour = document.querySelectorAll(".plans");
for (var i = 0; i< hour.length; i++){
  var currentTime = Date()
  console.log(currentTime)
  console.log(hour[i])
  if (hour < Date){
    
  }
}
// 1. use jquery to select divs with name plans. 2. gives you an array .each()  also crate var for current time create var that just pulls the hour 3. create if then statement. if 