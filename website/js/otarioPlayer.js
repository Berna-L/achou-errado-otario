$(function () {
    let videoPlayer = $("#bgndVideo");
    let videoJson = videoPlayer.data("property");
    let possibleVideos = JSON.parse(document.getElementById("video-list").innerHTML).videos;
    let chosenVideo = possibleVideos[Math.floor(Math.random() * possibleVideos.length)];
    videoJson.videoURL = chosenVideo.url;
    videoJson.startAt = chosenVideo.startAt;
    videoJson.stopAt = chosenVideo.stopAt;
    videoPlayer.attr('data-property', JSON.stringify(videoJson));
    videoPlayer.YTPlayer();
});