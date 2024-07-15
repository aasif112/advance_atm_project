
import inquirer from "inquirer";

let  myPin = 1122
let balance = 10000

let  pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        message:"Enter your PIN number:",
        type:"number",
    },
   
])

if(pinAnswer.pin === myPin) {
    console.log("correct pin code:")
    let askOperation = await inquirer.prompt([
        {
            message:"Please select option:",
            type:"list",
            name:"opertion",
            choices:["Withdraw Amount", "Blanace Inquiry"]
        }
    ])

    if(askOperation.opertion === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                message:"Enter amount:",
                type:"number",
                name:"amountTaken"
            }
        ])
        balance -= amountAns.amountTaken
        console.log(`Withdraw Amount: \t${amountAns.amountTaken} \nYour Remainning Balance is: \t${balance}`)

    }
    else if(askOperation.opertion === "Blanace Inquiry") {
        console.log(`Your balance is: \t${balance}`)
    }

} else {
    console.log(`Please Enter Correct PIN number:`)
}
