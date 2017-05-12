var button = document.querySelector(".popup-search-btn");
var popup = document.querySelector(".popup-search-form");



button.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.toggle("popup-search-form-hide");
});

