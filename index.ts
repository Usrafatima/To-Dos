#! /usr/bin/env node
import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
    let operations = await inquirer.prompt([
        {
            name: "todoslist",
            type: "list",
            message: "Select one",
            choices: ["Add task", "View tasks", "Remove task"],
        }
    ]);

    if (operations.todoslist === "Add task") {
        let Addtask = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "What do you want to add in your todos?",
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to add more?",
                default: false,
            }
        ]);
        todos.push(Addtask.todo);
        condition = Addtask.addMore;
        console.log(todos);
    } else if (operations.todoslist === "View tasks") {
        console.log(todos);
    } else if (operations.todoslist === "Remove task") {
        let removetask = await inquirer.prompt([
            {
                name: "todo",
                type: "list",
                message: "Select task to remove",
                choices: todos.map((item) => item),
            }
        ]);
        let newtodos: string[] = todos.filter((val) => val !== removetask.todo);
        todos = [...newtodos];
        
        console.log(todos);
    }
};
