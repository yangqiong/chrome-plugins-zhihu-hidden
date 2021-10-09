const hiddenVideo = () => {
    const itemEles = document.querySelectorAll(".TopstoryItem");
    for (let itemEle of itemEles){
      if (itemEle.querySelector(".ZVideoItem") || itemEle.querySelector(".VideoAnswerPlayer")) {
        itemEle.style.display = 'none';
      }
    }
}


hiddenVideo();

const resizeObserver = new ResizeObserver(() => {
  hiddenVideo();
});
resizeObserver.observe(document.querySelector('.Topstory-recommend'));


