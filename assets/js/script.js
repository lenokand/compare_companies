// Define the questions array as an array of objects.
/* const questions = [
    {
        question: "What does JSON stand for?",
        answers: ["JavaScript Object Notation", "Java Soon Objects Notification", "JavaScript Objects Notation", "JavaScript Object Notification"],
        correct: 0
    },
    {
        question: "1 What does JSON stand for?",
        answers: ["JavaScript Object Notation", "Java Soon Objects Notification", "JavaScript Objects Notation", "JavaScript Object Notification"],
        correct: 0
    },
    {
        question: "2 What does JSON stand for?",
        answers: ["JavaScript Object Notation", "Java Soon Objects Notification", "JavaScript Objects Notation", "JavaScript Object Notification"],
        correct: 0
    },
    {
        question: "3 What does JSON stand for?",
        answers: ["JavaScript Object Notation", "Java Soon Objects Notification", "JavaScript Objects Notation", "JavaScript Object Notification"],
        correct: 0
    }
]; */

// Remove this line as it's not needed.
// const json = JSON.stringify(questions);

// Import 'questions.json' and store it in the 'questions' variable.
/* import { questions } from 'questions.json';
 */
// Perform the fetch request to get questions from an API.



fetch("csvjson.json")
    .then(response => response.json())
    .then(json => {
        const mainTag = document.querySelector("main");
        console.log(json);

        const Company = json.results;

        Company.forEach((CompanyName, index) => {
            const h2Tag = document.createElement("h2");
            // Use the current question from 'questionObj' instead of 'question[0]'.
            h2Tag.innerHTML = CompanyName.ID;
            mainTag.appendChild(h2Tag);

            // Iterate through incorrect answers and create radio buttons.
            CompanyName.incorrect_answers.forEach((answer, index) => {
                const liTag = document.createElement("li");
                ulTag.appendChild(liTag);

                const inputTag = document.createElement("input");
                inputTag.id = "answer" + index;
                inputTag.name = "answer";
                inputTag.type = "radio";
                inputTag.value = answer;
                liTag.appendChild(inputTag);

                const labelTag = document.createElement("label");
                labelTag.setAttribute("for", "answer" + index);
                labelTag.innerText = answer;
                liTag.appendChild(labelTag);
            });

            // Append the ulTag to the mainTag.
            mainTag.appendChild(ulTag);
        });
    })
    .catch(error => {
        console.error(error);
    });
