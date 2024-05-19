#! usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollor$
let myPin = 1234;
//1st Step...
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your PinNo:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct the Pin Code!!!");
    //2nd Step... (Operation)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select the Option:",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    // 3rs Step....(Withdraw ke Andr Amount Daalna)
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdraw",
                message: "Enter the amount:",
                type: "number",
            }
        ]);
        myBalance -= withdrawAns.withdraw;
        console.log(`Your remaining balance is : ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is : ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "fast cash",
                message: "Select the amount:",
                type: "list",
                choices: [500, 1000, 2000, 5000]
            }
        ]);
        console.log("Transaction Successful");
    }
}
else {
    console.log("Incorrect Pin Code.");
}
