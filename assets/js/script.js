
fetch("csvjson.json")
    .then(response => response.json())
    .then(json => {
        const ulTag = document.querySelector("ul");
        const companies = json;
        companies.forEach((company, index) => {
            const liTag = document.createElement("li");
            liTag.id = `company${index}`;
            liTag.innerHTML = company.CompanyName;
            ulTag.appendChild(liTag);                     
        });

        const imgTag = document.querySelectorAll("li")
    })
    .catch(error => {
        console.error(error);
    });
