---
layout: pages-img
title: Portfolio - Total Stress Spreadsheet
permalink: /portfolio/tss/
---

[comment]: <> (https://www.w3schools.com/howto/howto_css_modal_images.asp)

<meta name="viewport" content="width=device-width, initial-scale=1">
<body>

<p> Testing18 </p>

<img id="myImg" src="/assets/images/TSS.png" alt="Total Stress Calculation Spreadsheet" style="width:100%;max-width:300px">

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script src="/assets/js/modal.js"></script>

<div class="w3-container">
  <h2>W3.CSS Modal Image Gallery</h2>
  <p>Click on the images to display them in full size.</p>
</div>

<div class="w3-row-padding">
  <div class="w3-container w3-third">
    <img src="/assets/images/TSS.png" style="width:100%;max-width:300px;cursor:pointer" 
    onclick="onClick(this)" class="w3-hover-opacity">
  </div>
  <div class="w3-container w3-third">
    <img src="/assets/images/avatar.jpg" style="width:100%;max-width:300px;cursor:pointer" 
    onclick="onClick(this)" class="w3-hover-opacity">
  </div>
  <div class="w3-container w3-third">
    <img src="img_mountains.jpg" style="width:100%;max-width:300px:pointer" 
    onclick="onClick(this)" class="w3-hover-opacity">
  </div>
</div>

<div id="modal01" class="w3-modal" onclick="this.style.display='none'">
  <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
  <div class="w3-modal-content w3-animate-zoom">
    <img id="img01" style="width:100%">
  </div>
</div>

<script>
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
</script>
            
</body>
