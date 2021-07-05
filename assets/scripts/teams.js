const colorThief = new ColorThief();
const img = new Image();

img.addEventListener('load', function() {
  var color = colorThief.getColor(img);
  console.log(color);
  $(".banner").css("background-color", "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")");
});

let imageURL = 'https://media.api-sports.io/football/teams/131.png';
let googleProxyURL = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=';

img.crossOrigin = 'Anonymous';
img.src = googleProxyURL + encodeURIComponent(imageURL);