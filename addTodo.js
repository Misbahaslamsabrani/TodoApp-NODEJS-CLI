const fs = require("fs");
const Chalk = require("chalk");
const {LOAD_DATA, checkDuplicate} = require("./reusable")
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
        SAVE_TODO(temArr);
        console.log(Chalk.black.bgGreen("Succesfully, New task added!"))
    }
}

const SAVE_TODO = (saveData) => {
    const jsonData = JSON.stringify(saveData);
    fs.writeFileSync("data.txt", jsonData)

}

module.exports = ADD_TODO;