const prompt = require('prompt-sync')({sigint: true});

let toDoList = [];
let newItem = [];

let choice = 0;
let count = 0;

let status = [];
let newStatus = [];

let trueFalse = [];

//1=add 2=complete 3=exit 

console.log("\n");

console.log("Welcome to the To-Do List Manager Application! ");

console.log("\n");

console.log("Your to-do list is empty.");

while(choice !== 3) {

    if (toDoList.length <= 0) {

        console.log("There are no items in your to-do list.");

    }

    console.log("\n");
    
    console.log("Select an action: ");
    
    console.log("\n");

    console.log("[1] Add a to-do item to the list. ");
    console.log("[2] Mark a to-do item as complete. ");
    console.log("[3] Exit the program. ");
    console.log("[4] View to-do list. ")
    
    console.log("\n");

    let choice = (Number(prompt("> ")));

    console.log("\n");

    if (choice === 1) {

        console.log("Add an item to your to-do list: ")

        console.log("\n");

        let newItem = (prompt("> "));       

        toDoList.push(newItem);

        console.log(" ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ ")

        console.log("You have " + Number(toDoList.length) + " item(s) left to do.")

        for (let count = 0; count < toDoList.length; count++) {
            
            trueFalse[count] = false;

            if (trueFalse[count] === false) {

                status[count] = "incomplete";

            } else if (trueFalse[count] === true) {

                status[count] = "complete";

            }

            console.log(Number(count + 1) + "." + "[" + status[count] + "] " + toDoList[count]);
        
        }

    } 
    
    if (choice === 2) {

        console.log("Select an item to be marked complete.");

        let newStatus = Number(prompt("> "));

        console.log("You have " + Number(toDoList.length) + " item(s) to do." )

        for (let count = 0; count < toDoList.length; count++) {

            trueFalse[newStatus-1] = true;

            if (trueFalse[count] === false) {

                status[count] = "[incomplete]";

            } else if (trueFalse[count] === true) {

                status[count] = "[complete]";

            }

            console.log(Number(count + 1) + "." + status[count] + toDoList[count]);

        }
    
    }
    
    if (choice === 3) {

        return console.log("Program terminated. Goodbye!");

    }

    if (choice === 4) {

        console.log("Current to-do list");

        for (let count = 0; count < toDoList.length; count++){
        
        console.log(Number(count + 1) + "." + "[" + status[count] + "]" + toDoList[count]);

        }

    }
    
    if (choice !== 1 && choice !== 2 && choice !== 3 && choice !== 4) {

        console.log("Invalid choice selected, try again.")

    }

}