
fetch("csvjson.json")
    .then(response => response.json())
    .then(json => {
        const ulTag = document.querySelector("ul");
        const companies = json;
        companies.forEach((company, index) => {
            const liTag = document.createElement("li");
            const imgTag = document.createElement("img");
            const pNameTag = document.createElement("p");
            const pNumberTag = document.createElement("p");
            imgTag.src = company.Image;
            liTag.id = `company${index}`;
            liTag.classList.add("information");
            pNameTag.classList.add("name");
            pNumberTag.classList.add("number");
            pNameTag.innerHTML = company.CompanyName;
            pNumberTag.innerHTML = company.Numinternship;
            ulTag.appendChild(liTag);     
            liTag.appendChild(imgTag);
            liTag.appendChild(pNameTag);
            liTag.appendChild(pNumberTag);
            
            
            liTag.addEventListener("click", function() {
                
            });

            
        });       
    })
    .catch(error => {
        console.error(error);
    });

