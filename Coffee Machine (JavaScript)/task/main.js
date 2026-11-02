// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// console.log("Starting to make a coffee\n" +
//     "Grinding coffee beans\n" +
//     "Boiling water\n" +
//     "Mixing boiled water with crushed coffee beans\n" +
//     "Pouring coffee into the cup\n" +
//     "Pouring some milk into the cup\n" +
//     "Coffee is ready!")
// const countWater = Number(input("Write how many ml of water the coffee machine has:"));
// const countMilk = Number(input("Write how many ml of milk the coffee machine has:"));
//
// const countBeans = Number(input("Write how many grams of coffee beans the coffee machine has:"));
//
// const countCups = Number(input("Write how many cups of coffee you will need:"));


// const coffeeMachineHas = input("The coffee machine has:");
//
// const waterHas = input(`${countWater} ml of water `);
// const milkHas = input(`${countMilk} ml of milk `);
// const beansHas = input(`${countBeans} g of coffee beans `);
// const cupsHas = input(`${countCups} disposable cups `);

const coffeeMachine = {
    water: 400,
    milk: 540,
    beans: 120,
    cups: 9,
    money:550
}
1
const cup = {
    water: 200,
    milk: 50,
    beans: 15
}

const recipes = {
    1: {
        name: 'espresso',
        water: 250,
        milk: 0,
        beans: 16,
        money: 4
    }, 
    2: {
        name: 'latte',
        water: 350,
        milk: 75,
        beans: 20,
        money: 7
    },
    3: {
        name: 'cappuccino',
        water: 200,
        milk: 100,
        beans: 12,
        money: 6
    }
}



const printState = ()=>{
    console.log(`The coffee machine has:
${coffeeMachine.water} ml of water
${coffeeMachine.milk} ml of milk
${coffeeMachine.beans} g of coffee beans
${coffeeMachine.cups} disposable cups
$${coffeeMachine.money} of money`)
}




const buy = () => {
    const coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
   
    if (coffeeType === "back"){
        return;
    }
    const recipe = recipes[coffeeType];
    
    
    if (!recipe){
        return;
    } 
     
   


    if (coffeeMachine.water < recipe.water){
        console.log('Sorry, not enough water!')
    } else if (coffeeMachine.milk < recipe.milk){
        console.log('Sorry, not enough milk!')
    } else if (coffeeMachine.beans < recipe.beans){
        console.log('Sorry, not enough coffee beans!')
    } else if (coffeeMachine.cups < 1){
        console.log('Sorry, not enough cups!')
    } else {
        console.log('I have enough resources, making you a coffee!')
    

    coffeeMachine.water -= recipe.water;
    coffeeMachine.milk -= recipe.milk;
    coffeeMachine.beans -= recipe.beans;
    coffeeMachine.cups -= 1;
    coffeeMachine.money += recipe.money;
    }
    
    }
    


const fill = () =>{
    coffeeMachine.water += Number(input("Write how many ml of water you want to add: "));
    coffeeMachine.milk += Number(input("Write how many ml of milk you want to add: "));
    coffeeMachine.beans += Number(input("Write how many grams of coffee beans you want to add: "));

    coffeeMachine.cups += Number(input("Write how many disposable cups you want to add: "));

}

const take = ()=>{
    console.log(`I gave you $${coffeeMachine.money}`);
    coffeeMachine.money = 0;
}



const action = () =>{
    
    while (true){

        const actionPlan = input(`Write action (buy, fill, take, remaining, exit): \n`);
        
        if (actionPlan === "buy"){
            buy();

        } else if (actionPlan === "fill"){
            fill();
        } else if (actionPlan ==="take"){
            take();
        } else if (actionPlan === "remaining"){
            printState();

        } else if (actionPlan === "exit"){
            break;
        }
    } 
    
    
}


action();










