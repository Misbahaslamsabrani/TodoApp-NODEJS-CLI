const Chalk = require("chalk");
const {LOAD_DATA, checkForTask, SAVE_DATA} = require("./reusable");

const DELETE_TODO = (title) => {
        const data = LOAD_DATA();
        const isTaskExists = checkForTask(title, data)
        if(isTaskExists){
            const delTask = data.filter(v => v.title !== title);
            console.log(Chalk.black.bgGreen("Succesfully, Task deleted!"))
            SAVE_DATA(delTask);
        }
        else{
            console.log(Chalk.bold.red(`Sorry, this tittle '${title}' task doesn't exist.`))
        }
}
module.exports = DELETE_TODO;