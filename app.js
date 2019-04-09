const yargs = require("yargs")
const chalk = require("chalk");

console.log(chalk.red.bold("Server Running. . . ."));

const ADD_TODO = require("./addTodo");

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
            alias: "d",
            demandOption: true,
            type: "string",
        }
    },
    handler({title, description}){
        ADD_TODO(title, description)
    }
})

yargs.parse();