console.log(btoa("a47e33a8-4f21-4fa7-b154-d31100" + ":" + "MYSPORTSFEEDS"));

// $.ajax({
//   "async": true,
//   "crossDomain": true,
//   "url": "https://api.mysportsfeeds.com/v2.1/pull/mlb/current/games.json",
//   "method": "GET",
//   "headers": {
//     "Authorization": "Basic YTQ3ZTMzYTgtNGYyMS00ZmE3LWIxNTQtZDMxMTAwOk1ZU1BPUlRTRkVFRFM=",
//   }
// }).done(function (response) {
//   console.log(response);
// });

var config = {
    apiKey: "AIzaSyBfaMZmhoLBz_yJZRgIyfi9WF14cSfwOJM",
    authDomain: "baseball-facts-963d3.firebaseapp.com",
    databaseURL: "https://baseball-facts-963d3.firebaseio.com",
    projectId: "baseball-facts-963d3",
    storageBucket: "",
    messagingSenderId: "1010342222529",
    appId: "1:1010342222529:web:3f7434ee286fd292"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var facts = {}
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
console.log("asdf")
document.getElementById("randomFact").addEventListener("click",function(){
  $("#factsDisplay").text(facts.Fun_Baseball_Facts[getRandomInt(facts.Fun_Baseball_Facts.length)].fact)
})
database.ref().on(
  "value",
  function(snapshot) {
     facts = snapshot.val()
     },
  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });


$("#lookUpCity").on("click", function() {
    var conceptName = $('.custom-select')
    .find(':selected')
    .attr('value');
    console.log(conceptName)
//   $(".custom-select").on("click", function() {
//       // In this case, the "this" keyword refers to the button that was clicked
//       var homeTeam = $(this).attr("value");
// console.log(this);
var queryURL = `https://api.openweathermap.org/data/2.5/weather?id=${conceptName}&units=imperial&appid=6b1d1c3cef2c4bef15ddaaf8e3ceea4f`;
$.ajax({
  type: 'GET',
  url:queryURL,
  dataType: 'json',
  async: false,
  success: function (response) {
    console.log(response)
  }
 })
 
  .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h2>" + response.name + " Weather Details</h2>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });
    })
