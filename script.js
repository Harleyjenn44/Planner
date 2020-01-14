var date_time = document.getElementById("date_time");
date_time.textContent = moment().format('dddd, '+ 'MMMM Do, YYYY');
var currentTime = moment();


var savedPlans = document.querySelectorAll(".plans")
for(var i = 0; i < savedPlans.length; i++){
    var currentPlan = savedPlans[i];
  var specificTime =  $(currentPlan).attr("id");
  specificTime = specificTime.replace(/(am|pm)/, "");
  
  if(moment().hours(specificTime)<moment()){
    console.log("before");
    $.plans.css("background-color","green")
  }else if(moment().startOf("hour")< moment().hours(specificTime) < moment().add(1, "hour").startOf(hour)){
    console.log("during");
  } else {
    console.log("after");
  }

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
