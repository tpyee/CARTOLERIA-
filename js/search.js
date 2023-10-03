document.addEventListener("DOMContentLoaded", function () {

  const nav = document.querySelector(".navigators"),
    searchIcon = document.querySelector("#search-icon"),
    navCloseBtn = document.querySelector("#closeButton");
    const searchBox = document.querySelector(".search-container");
    const searchicon = document.querySelector(".searchIcon");
  
    searchIcon.addEventListener("click", () => {
    nav.classList.toggle("closeNav");
    nav.classList.remove("openNav");
    searchBox.classList.toggle("openBox");
    searchBox.classList.remove("closeBox");
  
    if (nav.classList.contains("closeNav")) {
      searchicon.classList.toggle("close");
      searchicon.classList.remove("open");
    }
  });
  
  
  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("closeNav");
    searchBox.classList.remove("openBox");
    searchIcon.classList.replace("bx-x", "bx-search-alt-2");
    searchicon.classList.remove("close");
  });
  
  });