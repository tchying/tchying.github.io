// Get the modal
// https://stackoverflow.com/questions/37402241/support-for-multiple-modal-single-page

var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

var img = document.document.getElementById("myImg");
var modalImg = document.getElementsByClassName("img01");
var captionText = document.document.getElementById("caption");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
    modalImg[0].src = this.src;
    captionText[0].innerHTML = this.alt;
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
    modalImg[1].src = this.src;
    captionText[1].innerHTML = this.alt;
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
