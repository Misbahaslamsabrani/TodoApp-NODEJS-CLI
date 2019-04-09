const Chalk = require("chalk");
const {LOAD_DATA} = require("./reusable");

const SHOW_ALL_TODOS = () => {
    const data = LOAD_DATA();
    const isData = data.length > 0;
    if(isData){
        console.log(Chalk.underline.green.bold("All Todos List: "))
        data.map(d => {
            console.log(Chalk`  {magenta ${d.title}}`)
            console.log(Chalk.white("       " + d.description))
        })
    }
    else{
        console.log(Chalk.bold.gray("Sorry, No Todos!"))
    }
}

module.exports = SHOW_ALL_TODOS;