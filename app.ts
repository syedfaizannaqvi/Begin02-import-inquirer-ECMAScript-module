import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"
}])

console.log("Inshallah, in " + (60 - answers.age) + "years you will be 60 years old.");