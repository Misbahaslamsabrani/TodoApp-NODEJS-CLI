const Chalk = require("chalk");
const fs = require("fs");

const LOAD_DATA = () => {

    console.log(Chalk.yellow("Loading Data. . . "))

    try {
        const rawData = fs.readFileSync("data.txt")
        const parsedData = JSON.parse(rawData);
        return parsedData;
    }
    catch (e) {
        return [];
    }
}

const checkDuplicate = (title, data) => {
    const dataFound = data.find(d => d.title === title);
    return dataFound === undefined ? false : true;
}

const checkForTask = (title, data) => {
    const dataFound = data.find(d => d.title === title);
    return dataFound !== undefined ? true : false;
}

const SAVE_DATA = (saveData) => {
    const jsonData = JSON.stringify(saveData);
    fs.writeFileSync("data.txt", jsonData);
}
module.exports = {
    LOAD_DATA,
    checkDuplicate,
    checkForTask,
    SAVE_DATA,
}