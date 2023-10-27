
fetch("csvjson.json")
    .then(response => response.json())
    .then(json => {
        const ulTag = document.querySelector("ul");
        const companies = json;
        companies.forEach((company, index) => {
            const liTag = document.createElement("li");
            const imgTag = document.createElement("img");
            imgTag.src = company.Image;
            liTag.id = `company${index}`;
            liTag.innerHTML = company.CompanyName;
            ulTag.appendChild(liTag);     
            liTag.appendChild(imgTag);
            
        });       
    })
    .catch(error => {
        console.error(error);
    });
