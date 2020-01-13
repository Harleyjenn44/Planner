var date_time = document.getElementById("date_time");
date_time.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

var savedPlans = document.querySelectorAll(".plans")
for(var i = 0; i < savedPlans.length; i++){
    var currentPlan = savedPlans[i];
  var specificTime =  $(currentPlan).attr("id");
  $(currentPlan).val(localStorage.getItem(specificTime));
}


var event = document.querySelectorAll(".event");
for(var i=0; i<event.length; i++){
event[i].addEventListener("click", function(){
  var input = $(this).siblings(".plans");
  var time = $(input).attr("id");
  var plan = $(input).val()
  localStorage.setItem(time, plan);
  
})}
