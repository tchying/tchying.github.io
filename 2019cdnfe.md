---
layout: pages-img
title: Portfolio - Visualizing the 2019 Canadian Federal Election
permalink: /portfolio/2019cdnfe/
---

<meta name="viewport" content="width=device-width, initial-scale=1">
#### Visualizing the 2019 Canadian
#### federal election

I used ArcGIS Pro to produce a map that colour-coded electoral districts by the voter turnout and the winner's majority percentage in the 2019 Canadian federal election. 

<img class="myImages" id="myImg" src="/assets/images/cLayout.png" style="width:100%;height:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>

<!--more-->

Dark blue ridings, with high majority percentages and voter turnout, were solidly in favour of the winning candidate, whereas white ridings, with slim majorities and low turnout, could easily have swung in a different candidate's favour if more electors chose to vote.

I defined the thresholds between low, medium, and high colours manually, using the justification below, as I wasn't sure which mathematically-defined method was the best of the four available in ArcGIS.

A low majority percentage was defined as 1.9% or less. All ridings below this threshold were decided by 1000 votes or less, save for King—Vaughan (1141 votes). Similarly, Nunavut (10% majority percentage) was the only riding decided by 1000 votes or less with a majority percentage greater than 1.9%. A high majority percentage was defined as greater than 18.4%, the median value of all ridings. The mean majority percentage (22.1%) was heavily skewed due to ridings in the Prairies, many of which had majority percentages of over 60%.

As the difference between mean and median voter turnout was minimal, I chose to define low voter turnout as less than 61.3%, one standard deviation below the mean of 66.9% (high voter turnout). 

The following maps depict the results in major metropolitan areas.

Toronto
<img class="myImages" id="myImg" src="/assets/images/torLayout.png" style="width:100%;height:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>

Montréal
<img class="myImages" id="myImg" src="/assets/images/monLayout.png" style="width:100%;height:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>

Vancouver
<img class="myImages" id="myImg" src="/assets/images/vanLayout.png" style="width:100%;height:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>

National Capital Region (Ottawa-Gatineau)
<img class="myImages" id="myImg" src="/assets/images/ncrLayout.png" style="width:100%;height:100%;max-width:392px;display:block;margin-left:auto;margin-right:auto;">
<p style="font-size: 0.75em;text-align:center;">Click image to enlargen.</p>

Voting data was sourced from tables 11 and 12 of the [official voting results](https://www.elections.ca/content.aspx?section=res&dir=rep/off/43gedata&document=summary&lang=e) published by Elections Canada. The [electoral districts shapefile](https://open.canada.ca/data/en/dataset/5931f6f0-0008-4b0c-94d7-a1ff596182c5) used in this map was taken from the Government of Canada's Open Government portal, and is licensed under [the Open Government Licence – Canada.](https://open.canada.ca/en/open-government-licence-canada)

<script src="/assets/js/modal.js"></script> 
