 const url = "https://opensheet.elk.sh/1uHevPupVpjgtQ6KaRSod-IUNS6PCHqlEhD9CsKipzwA/Sheet1";

  async function getData() {
    try {
      const response = await fetch(url);  // Fetch the data
      const data = await response.json(); // Convert the response to JSON
  
      // Loop through each entry in the data array and log the 'Name' property
      data.forEach(row => {
        //creating the elements and filling in the elements using the api's data
        const names = document.createElement("p");
        names.textContent = row.Name;

        const img = document.createElement("img");
        img.src = row.Screenshot;

        const textMessage = document.createElement("p");
        textMessage.textContent = row.TextMessage;
        
        const birthday = document.createElement("p");
        birthday.textContent = row.Birthday

        const birthdayLink = document.createElement("a");
        birthdayLink.textContent = row.birthdayLink;


        //test to chek if href adding works
        birthdayLink.href = "https://www.famousbirthdays.com/"+ row.birthdayLink;
        birthdayLink.textContent = "Who do they share a birthday with?";

        //customising the elements
        names.style.fontWeight = "bold";
 
        img.style.width = "20vw"; 
        img.style.height = "auto"; 

        //appending the elements to the body
        document.body.append(names);
        document.body.append(img);
        document.body.append(textMessage);
        document.body.append(birthday);
        document.body.append(birthdayLink);

      });
    }

    
    catch (error) {
      console.error("Error fetching data:", error); // Handle any errors
    }
  }

  getData();