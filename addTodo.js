const Chalk = require("chalk");
const {LOAD_DATA, checkDuplicate, SAVE_DATA} = require("./reusable");

const ADD_TODO = (title, description) => {
    const data = LOAD_DATA();

    const isDuplicate = checkDuplicate(title, data);

    if (isDuplicate) {
        console.log(Chalk`{black.bgRed Warning!} {bold.red This title '${title}' is already in Todo List.}`)
    }
    else {
        const newTask = {
            title,
            description,
        }
        const temArr = [...data, newTask];
        console.log(Chalk.black.bgMagenta("Succesfully, New task added!"))
        SAVE_DATA(temArr);
    }
}

module.exports = ADD_TODO;