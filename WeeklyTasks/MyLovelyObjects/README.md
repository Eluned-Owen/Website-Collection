Week Eleven - My Lovely Objects

A website that lets users interact with cute objects that I found around my flat.

Requirements:
-VS Code or any IDE of choice to run the HTML, CSS and JavaScript file
or Access to the website at ["https://cci.arts.ac.uk/~elowen/WhoWishedMeAHappyBirthday/"]
-Internet Connection required for ThreeJS

How to use:
-Download the code from the Github ["https://git.arts.ac.uk/23008862/Web-Development-Weekly-Tasks"]
-Open the file in the preferred IDE 

For this task, I decided to create 3 seperate ThreeJS canvases displaying an interactable version of cute objects. I scanned the items using Polycam on my phone and exported it as a .gbl, viewed the model through Blender and imported it into ThreeJS. This process was time consuming as VS code had trouble finding the ThreeJS installed on my device, because of this, I decided to use ThreeJS via CDN instead of importing locally. 

To improve: I would set the canvases up dynamically so it changes width according to it's aspect ratio, creating a more responsive design. To further this responsivity I would add media queries to this task, changing the format according to the users viewport.
