const comparisonBlock = document.getElementById("comparisonBlock");


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
                if (!this.classList.contains("showMe")) {
                    
                    const wrapperTag =document.createElement("ul");    
                const descriptionTag = document.createElement("li");
                const nameTag = document.createElement("li");

                nameTag.innerHTML = company.CompanyName;
                comparisonBlock.appendChild(wrapperTag);
                wrapperTag.appendChild(descriptionTag);
                descriptionTag.appendChild(nameTag);
                descriptionTag.innerHTML = company.Description;
                console.log(this);
                this.classList.add("showMe");


                }
                console.log(company);
                
               




            // const imgTag = document.createElement("img");
            // const pNameTag = document.createElement("p");
            // const pNumberTag = document.createElement("p");
            });

            
        });       
    })
    .catch(error => {
        console.error(error);
    });

