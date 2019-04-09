const yargs = require("yargs")
const chalk = require("chalk");

console.log(chalk.red.bold("Server Running. . . ."));

const ADD_TODO = require("./addTodo");
const DELETE_TODO = require("./deleteTodo");
const SHOW_ALL_TODOS = require("./list");

yargs.command({
    command: "add",
    describe: "Adding task in todo list . . . ",
    builder: {
        title: {
            describe: "To add title of task",
            alias: "t",
            demandOption: true,
            type: "string",
        },
        description: {
            describe: "To add description of task",
            alias: "des",
            demandOption: true,
            type: "string",
        }
    },
    handler({title, description}){
        ADD_TODO(title, description)
    }
})

yargs.command({
    command: "delete",
    describe: "Deleting task from todo list . . . ",
    builder: {
        delTask: {
            describe: "To delete task",
            alias: "d",
            demandOption: true,
            type: "string",
        },
    },
    handler({delTask}){
        DELETE_TODO(delTask);
    }
})

yargs.command({
    command: "list",
    describe: "Showing Todo List . . . ",
    builder: {
        list: {
            describe: "To show todo list",
            alias: "l",
        },
    },
    handler(){
        SHOW_ALL_TODOS();
    }
})

yargs.parse();