const hiddenVideo = () => {
    const itemEles = document.querySelectorAll(".TopstoryItem:not(.video-check)");
    for (let itemEle of itemEles){
      if (itemEle.querySelector(".ZVideoItem") || itemEle.querySelector(".VideoAnswerPlayer")) {
        itemEle.style.display = 'none';
      }
      itemEle.className += " video-check";
    }
}


hiddenVideo();

const resizeObserver = new ResizeObserver(() => {
  hiddenVideo();
});
resizeObserver.observe(document.querySelector('.Topstory-recommend'));


