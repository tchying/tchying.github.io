---
layout: pages-img
title: Portfolio - Total Stress Spreadsheet
permalink: /portfolio/tss/
---

[comment]: <> (https://www.w3schools.com/howto/howto_css_modal_images.asp)

<body>

<h2>Image Modal</h2>
<p>In this example, we use CSS to create a modal (dialog box) that is hidden by default.</p>
<p>We use JavaScript to trigger the modal and to display the current image inside the modal when it is clicked on. Also note that we use the value from the image's "alt" attribute as an image caption text inside the modal.</p>

<img id="myImg" src="/assets/images/avatar.jpg" alt="Snow" style="width:100%;max-width:300px">

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script src="/assets/js/modal.js"></script>

</body>
