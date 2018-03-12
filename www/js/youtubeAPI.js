function loadDevice(){
   document.addEventListener("deviceready", onDeviceReady, false)
}
function onDeviceReady(){
    window.plugins.googleplus.getSigningCertificateFingerprint(function(res){});
    gapi.client.setApiKey('AIzaSyA--agUkn_uzDE2RIb67G9cxep-zTAMMBk');
	gapi.client.load('youtube', 'v3', function(){
		gapi.client.load('youtubeAnalytics', 'v1', function(){
		})
	})
}


window.onJSClientLoad = function(){

    gapi.client.setApiKey('AIzaSyA--agUkn_uzDE2RIb67G9cxep-zTAMMBk');
        gapi.client.load('youtube', 'v3', function(){
            gapi.client.load('youtubeAnalytics', 'v1', function(){
            })
        })
    }

$(
    function() {
	var searchBar = document.getElementById('videoSearcherBar');
	var busquedaQuery = searchBar.busqueda.value

	searchBar.addEventListener('submit', event => {
		event.preventDefault()

	var request = gapi.client.youtube.search.list({'maxResults': '1',
                 'part': 'snippet',
                 'q': busquedaQuery,
                 'type': 'video'});

	request.execute(function(response){
		if('error' in response){
			console.log(response.error.message);
		} else{
			vidId = response.items[0].id.videoId;
			displayVideo(vidId);

		}
	});
})
}
)
;

function displayVideo(idURL){
    $('.videoPlayerDiv').show();
    $('#advertenciaMovil').hide();
	var videoPlayerDivisor = document.getElementById('ytplayer');
	videoPlayerDivisor.src='https://www.youtube.com/embed/'+ idURL;

}


//})();


