$(document).ready(function(){

  var url = "https://wind-bow.gomix.me/twitch-api" + "/streams/freecodecamp?callback=?"

  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

  $.getJSON(url, function(data) {

  console.log(data);

}); //json request closing
}); //document ready closing
