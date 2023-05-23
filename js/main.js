let span = document.querySelector(".up");
let header = document.getElementById("header")

window.onscroll = function () {
  
  this.scrollY >= 500 ? span.classList.add("active") : span.classList.remove("active");
  this.scrollY >= 250 ? header.classList.add("header_2") : header.classList.remove("header_2");

};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};




