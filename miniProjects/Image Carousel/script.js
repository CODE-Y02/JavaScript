const imgs = document.getElementById("imgs");

const imgList = document.querySelectorAll("#imgs img");

// console.log(imgs.length);

let idx = 0;

function slider() {
  idx++;

  if (idx > imgList.length - 1) idx = 0;

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(slider, 2000);
