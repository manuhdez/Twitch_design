$(document).ready(function(){

var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "RobotCaleb", "noobs2ninjas"];

for (var i=0; i < streamers.length; i++) {

  var url = "https://wind-bow.gomix.me/twitch-api/channels/";
  var callback = "?callback=?";

  $.ajax({
  type: "GET",
  url: url + streamers[i] + callback,
  async: false,
  dataType: "json",
  success: function(data){



    var url2 = "https://wind-bow.gomix.me/twitch-api/streams/";

    $.ajax({
  type: "GET",
  url: url2 + data.display_name + callback,
  async: false,
  dataType: "json",
  success: function(data2){


    // Estructura de las tarjetas de cada canal
    $('#canales').prepend(
      '<div class="card white" id="filtro">' +
        '<div class="card-image">' +
          '<img src="' + data.profile_banner + '"alt="'+ data.display_name +'" height="200px">' +
          '<a class="btn-floating halfway-fab waves-effect waves-light purple" target="blank" href="' + data.url +'">' +
            '<i class="material-icons">play_arrow</i>' +
          '</a>' +
        '</div>' +
        '<div class="card-content">' +
          '<span class="card-title">' + data.display_name + '</span>' +
          '<p id="status">' + data.status + '</p><br>' +
          '<p class="orange-text">FOLLOWS  -<span class="grey-text" id="broadcast">  '+ data.followers +'</span></>' +
          '<p class="orange-text">VIEWS  -<span class="grey-text" id="broadcast">  '+ data.followers +'</span></>' +
        '</div>' +
        '<div class="card-action" id="'+ 'conection' +'">' +

        '</div>' +
      '</div>'
    );

    if (data2.stream === null){
      $('#conection').prepend(
        '<p class="grey-text">offline</p>'
      );
      $('#filtro').addClass('offline');
      $('#filtro').removeClass('online');

    } else {
      $('#conection').prepend(

        '<p class="green-text">online  -  <span class="grey-text" >'+ data2.stream.game +'</span></p>'
      );
      $('#filtro').addClass('online');
      $('#filtro').removeClass('offline');
    }


//'<p id="conection"' + 'class="green-text">online  -  <span class="grey-text" id="broadcast">retransmitiendo</span></p>' +
  },

  error: function(errorMessage) {
    alert('Ha habido un error en la conexión');
  }

}); // secundary ajax call


  },
  error: function(errorMessage) {
    alert('Ha habido un error en la conexión');
  }

  }); // main ajax call

} // for loop

}); //document ready



//Alternating active tabs
  $('#online').click(function(){

    $('#all').removeClass('text-lighten-5');
    $('#offline').removeClass('text-lighten-5');
    $('#all').addClass('text-lighten-1');
    $('#offline').addClass('text-lighten-1');
    $(this).removeClass('text-lighten-1');
    $(this).addClass('active');

    $('.offline').hide();
    $('.online').show();
  });

  $('#all').click(function(){

    $('#online').removeClass('text-lighten-5');
    $('#offline').removeClass('text-lighten-5');
    $('#online').addClass('text-lighten-1');
    $('#offline').addClass('text-lighten-1');
    $(this).removeClass('text-lighten-1');
    $(this).addClass('active');

    $('.online').show();
    $('.offline').show();
  });

  $('#offline').click(function(){

    $('#all').removeClass('text-lighten-5');
    $('#online').removeClass('text-lighten-5');
    $('#all').addClass('text-lighten-1');
    $('#online').addClass('text-lighten-1');
    $(this).removeClass('text-lighten-1');
    $(this).addClass('active');

    $('.online').hide();
    $('.offline').show();
  });
