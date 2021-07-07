const url = new URLSearchParams(window.location.search);
const id = url.get('id');

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api-football-v1.p.rapidapi.com/v3/teams?id=" + id,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5f24625205msh7220a67930e7cd0p1a6bb8jsn78ee6010eedc",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
  const country = response["response"]["0"]["team"]["country"];
  $("#nome").html(response["response"]["0"]["team"]["name"]);
  $("#logo").attr("src", response["response"]["0"]["team"]["logo"]);

  const colorThief = new ColorThief();
  const img = new Image();

  img.addEventListener('load', function() {
    var color = colorThief.getColor(img);
    $(".banner").css("background-color", "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")");
  });

  let imageURL = 'https://media.api-sports.io/football/teams/' + id + '.png';
  let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

  img.crossOrigin = 'Anonymous';
  img.src = googleProxyURL + encodeURIComponent(imageURL);

  $.ajax({
    url: 'https://restcountries.eu/rest/v2/name/' + country,
    success: function(response) {
      $("#nomeCountry").html(response["0"]["translations"]["br"]);
      $("#logoCountry").attr("src", response["0"]["flag"]);
    },
  });
});