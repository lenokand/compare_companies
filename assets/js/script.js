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
        const companies = json;
        console.log(companies);
        companies.forEach(company => {
            console.log(company);
            const h2Tag = document.createElement("h2");
            h2Tag.innerHTML = company.CompanyName_23-2; // Check the property name
            mainTag.appendChild(h2Tag);
        });
    })
    .catch(error => {
        console.error(error);
    });
