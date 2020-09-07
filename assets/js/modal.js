/*
https://www.w3schools.com/howto/howto_css_modal_images.asp
https://stackoverflow.com/questions/37402241/support-for-multiple-modal-single-page
*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img[0].onclick = function(){
  modal[0].style.display = "block";
  modalImg[0].src = this.src;
  captionText[0].innerHTML = this.alt;
}
img[1].onclick = function(){
  modal[1].style.display = "block";
  modalImg[1].src = this.src;
  captionText[1].innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() { 
  modal[0].style.display = "none";
}
span[1].onclick = function() { 
  modal[1].style.display = "none";
}

// Click outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
