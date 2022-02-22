const prompt = require('prompt-sync')({sigint: true});

let toDoList = [];
let listCount = 0;
let choice = 0;

//1=add 2=complete 3=exit 

console.log("Welcome to the To-Do List Manager Application! ");
console.log("Your to-do list is empty.");

while(choice !== 3) {

    console.log("Select an action: ");

    console.log("[1] Add a to-do item to the list. ");
    console.log("[2] Mark a to-do item as complete. ");
    console.log("[3] Exit the program.");

    let choice = (Number(prompt("> ")));

    if (choice === 1) {

        console.log("Add an item to your to-do list: ")

        let newItem = (prompt("> "))

        listCount += 1;

        toDoList = toDoList + listCount + ". " + newItem;

        console.log(toDoList);

    } 
    
    if (choice === 2) {

        console.log("")

    }
    
    if (choice === 3) {

        return console.log("Goodbye!");

    }
    
    if (choice !== 1 && choice !== 2 && choice !== 3) {

        console.log("Invalid choice selected, try again.")

    }

}