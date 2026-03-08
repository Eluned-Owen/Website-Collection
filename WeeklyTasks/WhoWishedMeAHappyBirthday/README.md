Week Seven - Who Wished me a Happy Birthday?

A website that uses a remote API on Google Sheets to show who wished me a happy birthday.

Requirements:
-VS Code or any IDE of choice to run the HTML, CSS and JavaScript file
or Access to the website at ["https://cci.arts.ac.uk/~elowen/WhoWishedMeAHappyBirthday/"]
-Internet Connection required

How to use:
-Download the code from the Github ["https://git.arts.ac.uk/23008862/Web-Development-Weekly-Tasks"]
-Open the file in the preferred IDE 

I used Ben Borger's github project Opensheet found at ["https://github.com/benborgers/opensheet#readme"] to convert a Google Sheet page to JSON so I could use it as an API in this task. I created a table for name, screenshot, text decription and two birthday sections, one for displaying the birthday as reguar text and the other to add onto a Famous Birthdays link, a website that tracks celebrities birthdays.

To Improve:
To improve on this weeks task I'd like to place each person who wished me a happy birthday at a different section of the page, which proved difficult as the data coming from the API is split according to charcterisic (expl, screenshot and name) instead of by person. I found out through reading api documentation that you can call the nth child to specify data easier.