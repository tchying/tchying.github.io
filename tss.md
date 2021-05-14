---
layout: pages-img
title: Portfolio - Total Stress Spreadsheet
permalink: /portfolio/tss/
---

[comment]: <> (https://stackoverflow.com/questions/47798971/several-modal-images-on-page)

<meta name="viewport" content="width=device-width, initial-scale=1">
#### Total Stress Spreadsheet

As part of a project in my Earth Engineering course (CIVE 153), I created a spreadsheet that calculated the total stress at 155 points above, inside, and below an earthen embankment. 

<!--more-->

<!-- <img... id... src... alt="Caption goes here." style...> -->
<img class="myImages" id="myImg" src="/assets/images/Cross-Section.png" style="width:100%;height:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>

Then, this was replicated two additional times for pre-construction, post-construction (or normal conditions), and peak flood scenarios, for a total of 465 points.

<img class="myImages" id="myImg" src="/assets/images/TSS.png" style="width:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>

The formula I used first checks if the elevation of the point is above or below the upper bound elevation of a particular material (air, water, dry or saturated soil). If the particular material is present above the point, the depth of the material is determined by subtracting the point's elevation, or the upper bound of the next material (whichever is greater) from the upper bound of the first material. Then, the depth is multiplied by the density of the first material. The sum of the densities times the depths is multiplied by gravity to determine a pressure (or stress).

It should be noted that, rather than using the upper bound of the "next" material for the last material, the point's elevation is compared against the lowest elevation. Additionally, as water cannot be present above dry soil, one of the two materials will have a depth of zero for every point in every scenario.

The data was used to generate plots of lithostatic stresses in MATLAB for each scenario. The script to do so was provided by Professor Robert McKillop of the Department of Civil and Environmental Engineering.

<img class="myImages" id="myImg" src="/assets/images/Before Construction.png" style="width:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>
<br>
<img class="myImages" id="myImg" src="/assets/images/Normal Conditions.png" style="width:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>
<br>
<img class="myImages" id="myImg" src="/assets/images/Peak Flood.png" style="width:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>

<script src="/assets/js/modal.js"></script>    
