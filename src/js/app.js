$(document).ready(function(){

  var url = "https://wind-bow.gomix.me/twitch-api/streams/"
  var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
  var callback = "?callback=?"

  $.ajax({
    type:"GET",
    url:url + streamers[0] + callback,
    async:false,
    dataType:"json",
    success: function(data) {

      console.log(data);
    }

}); //ajax request closing
}); //document ready closing
