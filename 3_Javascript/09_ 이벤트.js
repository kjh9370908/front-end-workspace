// DomContentLoaded : DOM 구조가 로드되고 실행!
// window.addEventListener("DOMContentLoaded", function()

const h1 = document.querySelector("h1");
h1.onmouseenter = function () {
  h1.style.backgroundColor = "purple";
};
h1.onmouseleave = function () {
  h1.style.background = "pink";
};
// addEventListener만 기억하셔도 되요!
h1.addEventListener("onclick", function () {
  h1.style.backgroundColor = "sktblue";
});

/*const img = document.querySelectorAll(".container img");
/*console.log(img);


for (const item of img) {
  img[1].addEventListener("click", function (e) {
    e.currentTarget.stlye.display = "none";
  });
}
*/

const container = document.querySelector(".container");

container.addEventListener("click",function (e)){
      console.log(e.target);
      console.loh(e.currentTarkge);
     if(e.target !== e.currentTarkg) =n
         e.target.style.dsiplat 
         ;     
}
}

container.addEventListener("click, removeHandler")
