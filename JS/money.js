//Calculate incomes and expenses using arrays, and warn if positive or negative

const moneyFlow = {
    incomes: [250],
    expenses: [320.34, 128.45, 176.87, 1450]
}


function calcBalance(incomesArray, expensesArray){
    let totalIncome = 0;
    let totalExpenses = 0;
    let balance = 0;

    for(let value of incomesArray){
        totalIncome += value 
    }

    for(let expenses of expensesArray){
        totalExpenses += expenses
    }
    
    balance = totalIncome - totalExpenses;

    if(balance >= 0){
        return "You have a positive balance of: " + balance 
    } else{
        return "You have a negative balance of: " + balance
    }
}

console.log(calcBalance(moneyFlow.incomes, moneyFlow.expenses));