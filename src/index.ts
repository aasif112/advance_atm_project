#!/usr/bin/env node
// ------------ADVANCE ATM----------


import inquirer from "inquirer";

const savedPin = 2222
let opeBalance = 100000
let balance = opeBalance
let userAcctType = "Current"

let messageArray:string [] = []
let amountArray:number [] = []
let timeArray:string [] = []


let getPin = await inquirer.prompt([
{   message:"Enter your PIN code:",    name:"pin",     type:"number"   }
])

if (getPin.pin === savedPin) {
let selectType = await inquirer.prompt([
{   message:"Please Select Your Account Type:",
    name:"selectType",          type:"list",
    choices: ["Current", "Saving", "Default"],   }
])  

if(selectType.selectType === userAcctType || selectType.selectType === "Default") {
console.log(`Your balance is: \t ${balance}`)
start(balance)

}
else {    console.log(`Invalid Account`)  }

} 
else {      console.log(`Please Enter Correct PIN Code`)    }


async function start(balance:number) {


let operation = await inquirer.prompt([
    {   message:"Select Option:",       name:"operation",       type:"list",
        choices:["Balance Iquiry", "Withdraw Cash",  "Transfer Amount"]
    }
])


if (operation.operation === "Balance Iquiry") {
    console.log(`Your balance is: \t ${balance}`)
    let amount = 0
    let message = `Balance Inquiry: \t ${balance}`
    let transTime = new Date().toLocaleString()
    buildArray(message, amount, transTime)
    otherTrans(/*message,*/ amount, balance)
}

else if(operation.operation === "Withdraw Cash") {
    let askAmount = await inquirer.prompt([
        {   message:"Select Amount:",       name:"cashOut",     type:"list",
            choices: [1000, 2000, 5000, 10000, "Other Amount"]
        }
    ])
    if(askAmount.cashOut === "Other Amount") {
        let enterAmount = await inquirer.prompt([
            {   message:"Enter Amount",         name:"enterAmount",
                type:"number"
            }
        ])
        let amount = enterAmount.enterAmount
        if(amount<balance) {
            console.log(`Amount Withdraw: \t ${amount} `)
            let message = `ATM Withdraw: `
            let transTime = new Date().toLocaleString()
            buildArray(message, amount, transTime)
            otherTrans(/*message,*/ amount, balance)
            
        } else if(amount>balance) {
                console.log(`Your account balance is LOW.`)
        }
        
    }
    else {
        let amount = askAmount.cashOut
        if(amount<balance) {
            console.log(`Amount Withdraw: \t ${amount}`)
            let message = `ATM Withdraw: `
            let transTime = new Date().toLocaleString()
            buildArray(message, amount, transTime)
            otherTrans(/*message,*/ amount, balance)
            
        } else if(amount>balance) {
            console.log(`Your account balance is LOW.`)
    }
    }
}

else if(operation.operation === "Transfer Amount") {
    let askAccount = await inquirer.prompt([
        {   message:"Enter 8-digit Account Number",
            type:"number",      name:"otherAcct"
        }
    ])
    let acctLenght = (askAccount.otherAcct).toString().length
    
    if(acctLenght === 8) {
            let trasnfAmount = await inquirer.prompt([
                {   message:"Please enter amount you want to transfer:",
                    name:"trasnfAmount",        type:"number"   }
            ])
            let amount = trasnfAmount.trasnfAmount
            if(amount<balance) {
                let otp = Math.round(Math.random()*1000+1000)
                console.log(`${otp} is OTP for your Bank Transfer.`)
                let otpReply = await inquirer.prompt([
                    {   message:"Please Enter OTP sent on your Number.",
                        name:"otpReply", type:"number"      }
                ])
                if(otpReply.otpReply === otp) {
                    console.log(`OTP is correct. \t Amount Transfered Succesfully: \t ${amount}`)
                    let message = `ATM Tranfer to \n \tAccount #: ${askAccount.otherAcct}.`
                    let transTime = new Date().toLocaleString()
                    buildArray(message, amount, transTime)
                    otherTrans(/*message,*/ amount, balance)
                
                } else {    console.log(`Incorrect OTP`)    }

            } else if(amount>balance) {
                console.log(`Your account balance is LOW.`) }
        
        }
        else {
            console.log(`Please enter a valid account number.`)
        }
    } 
}


function buildArray (message:string, amount:number, transTime:string) {
messageArray.push(message)
amountArray.push(amount)
timeArray.push(transTime)
}


async function otherTrans(/*message:string,*/ amount:number, balance:number) {
    balance -= amount
    console.log(`Remainig Balance: \t ${balance}` )
    
    let secondTrans = await inquirer.prompt([
        {   message:"Do you want to make Anohter Transaction?",  
            name:"secondTrans",      type:"list",    choices:["Yes", "No"]
        }
    ])
    if(secondTrans.secondTrans === "Yes") {
        start(balance)
    } else {
        end(/*message, amount,*/ balance)
        console.log(`Thanks for using this ATM`)
    }
    }

async function end(/*message:string, amount:number,*/ balance:number) {
    let askReceipt = await inquirer.prompt([
    {   message:"Do you want to get a receipt?",  name:"askReceipt",
        type:"list",                    choices:["Yes", "No"]
    }
    ])
        console.log(``)
        console.log(`------------------------- ATM 508 ---------------------------`)
        console.log(``)
        if (askReceipt.askReceipt === "Yes")  {
            for(let i=0; i<amountArray.length; i++) {
                console.log(`${timeArray[i]}    \n \t${messageArray[i]}  \t${amountArray[i]}`)
            }
        console.log(`Your Remaining Balance is \t${balance}`)
        console.log(``)
        console.log(`-----------------Thank You for using this ATM-----------------`)
        console.log(``)
}
else {
    console.log(`-----------------Thank You for using this ATM-----------------`)
}
}


