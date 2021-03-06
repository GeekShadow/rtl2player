// Retrieve Artist/Song

var currentsong;

$(document).ready(function() {

    loadArtistSong();

    $.ajaxSetup({ cache: false }); // This part addresses an IE bug.  without it, IE will only load the first number and will never refresh

setInterval(function() {

  loadArtistSong();

  if ($('input[name=notifibox]').is(':checked') == true ) {
    if (currentsong != $('#song').text()) {
      //alert($('#song').text());
      //alert(currentsong);
      if (navigator.mozNotification) {
        document.body.classList.add("notification");
        notification = navigator.mozNotification.createNotification("RTL2 Player", $('#artist').text() + " - " + $('#song').text(), "http://geekshadow.github.io/rtl2player/images/favicon.png");
        notification.show();
        }
     }
  }

    currentsong = $('#song').text();

}, 3000);
    
});

function loadArtistSong () {
  $('#artist').load('http://nzf.turmel.info/data_rtl2/artist.txt');
  $('#song').load('http://nzf.turmel.info/data_rtl2/song.txt');
}

// Player JS
var playing = false
var nectaaudio = new Audio("http://streaming.radio.rtl2.fr/rtl2-1-48-192");
nectaaudio.mozAudioChannelType = "content";

function playradio() {
		nectaaudio.load();
		nectaaudio.play();
    playing = true;
    document.getElementById('pause').style.visibility='visible';
    document.getElementById('pause').style.display='block';
    document.getElementById('play').style.visibility='hidden';
    document.getElementById('play').style.display='none';
}

function pauseradio() {
    nectaaudio.pause();
    playing = false;
    document.getElementById('play').style.visibility='visible';
    document.getElementById('play').style.display='block';
    document.getElementById('pause').style.visibility='hidden';
    document.getElementById('pause').style.display='none';
}
