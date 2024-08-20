export default async function decorate() {
  const promo_video = document.querySelector(".promovideo");
  const link = promo_video.querySelector("a");
  console.log(link);
  const video = document.createElement("video");
  video.setAttribute("src", link.href);
  console.log(video);
  video.setAttribute("loop", true);

  const button = document.createElement("button");
  button.addEventListener("click", () => {
    var img = document.querySelector(".play-pause img");
    console.log(img);
    if (img.getAttribute("src") === "../../icons/pause.png") {
      img.setAttribute("src", "../../icons/play.png");
      video.pause();
    } else {
      img.setAttribute("src", "../../icons/pause.png");
      video.play();
    }
    //    console.log(img)
  });
  button.innerHTML = "<img src='../../icons/pause.png' />";
  button.classList.add("play-pause");

  // promo_video.querySelector('p').append(video);
  promo_video.querySelector("p").removeChild(link);
  promo_video.querySelector("div > div").append(video);

  promo_video.querySelector("div > div").append(button);
  var i = 1;
  var lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    const video = document.querySelector(".promovideo video");
    var st = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 200 && scrollY < 1100) {
      if (st > lastScrollTop && i >= 0.85) {
        video.style.borderRadius = (1 - i) * 0.5 * 1000 + "px";
        // console.log(1-(scrollY/250-1));
        video.style.transform = "scale(" + i + ")";
        i = i - 0.0015;
      } else if (st < lastScrollTop && i <= 1) {
        video.style.borderRadius = (1 - i) * 0.5 * 1000 + "px";
        // console.log(1-(scrollY/250-1));
        video.style.transform = "scale(" + i + ")";
        i = i + 0.0015;
      }
    } else if (scrollY <= 200 && i <= 1) {
      video.style.borderRadius = (1 - i) * 0.5 * 1000 + "px";
      // console.log(1-(scrollY/250-1));
      video.style.transform = "scale(" + i + ")";
      i = i + 0.0015;
    } else {
      video.style.borderRadius = "0px";
      video.style.transform = "scale(1)";
    }

    lastScrollTop = st <= 0 ? 0 : st;
  });

  document.querySelector("video").setAttribute("autoplay", true);
}
