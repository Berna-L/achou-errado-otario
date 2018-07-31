$(function () {
    let videoPlayer = $("#bgndVideo");
    let videoJson = videoPlayer.data("property");
    let possibleVideos = JSON.parse(videoList).videos;
    let chosenVideo = possibleVideos[Math.floor(Math.random() * possibleVideos.length)];
    videoJson.videoURL = chosenVideo.url;
    videoJson.startAt = chosenVideo.startAt;
    videoJson.stopAt = chosenVideo.stopAt;
    videoPlayer.attr('data-property', JSON.stringify(videoJson));
    $("#nome-video").text(chosenVideo.description);
    $("#link-video").attr('href', chosenVideo.url);
    videoPlayer.YTPlayer();
});