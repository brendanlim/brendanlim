var videoFiles = [
	{"file": "background", "title": "Hello" }
];

var t = 1;
var globalPosition = Math.floor((Math.random()*videoFiles.length));

function playVideoWithPosition(position) {
	var videoFile = videoFileFromPosition(position);
	var posterFile = posterFileFromPosition(position);

	if($("div.videoBG_wrapper").length)
		$("div.videoBG_wrapper").remove();

	if($("div.video-background").length)
		$("div.video-background").remove();

	$('body').append("<div class='video-background'></div>");

	$('.video-background').videobackground({
		videoSource: [
				[videoFile + '.mp4', 'video/mp4'],
				[videoFile + '.webm', 'video/webm'], 
				[videoFile + '.ogv', 'video/ogg']
			], 
		poster: posterFile,
		loop: true,
		endedCallback: function() {
			// nextVideo(globalPosition);
		}
	});
}

function videoFileFromPosition(position) {
	return "videos/" + videoFiles[position]['file'];
}

function videoTitleFromPosition(position) {
	return videoFiles[position]['title'];
}

function posterFileFromPosition(position) {
	return "videos/" + videoFiles[position]['file'] + ".jpg";
}

$(document).keydown(function(e){
    if (e.keyCode == 37) { // left
       	previousVideo(globalPosition);
       	return false;
    } else if (e.keyCode == 39) {
    	nextVideo(globalPosition);
    	return false;
    }
});

$(document).ready(function() {
	playVideoWithPosition(globalPosition);
});