//ドリンクの本数計算
// function how_many_drinks() {
//現在のドリンクの本数
// }

//投入金額
// function how_much_mpney() { }

//Drinkを入れる
// function prompt()
// console.log(userinput)


drink = [
    {
        name: "coke",
        stock: 20,
        price: 120
    },
    {
        name: "pokari",
        stock: 12,
        price: 100
    },
    {
        name: "orange",
        stock: 60,
        price: 150
    },
    {
        name: "redbull",
        stock: 100,
        price: 210
    },
    {
        name: "tea",
        stock: 3,
        price: 100
    },
]
const InitInventory = []
let balance = 0

for (let i of drink) {
    InitInventory.push(i.stock)
}
for (let i of drink) {
    console.log(`${i.name}    stock:${i.stock}    price:${i.price} `)
}
console.log("\nIf you want to buy a drink, put some money in it.")

function readUserInput(question) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        readline.question(question, (answer) => {
            resolve(answer);
            readline.close();
        });
    });
}

function shouldBuy(product, balance) {
    return product.price <= balance
}

function replenish() {
    drink.forEach((v, i) => {
        if (v.stock == InitInventory[i]) {
            console.log(`${v.name} has not decreased`)
        } else {
            console.log(`Replenished ${InitInventory[i] - v.stock} ${v.name}`)
            v.stock = InitInventory[i]
        }
    });
}

function reject() {
    let change = {}
    let moneyType = [10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1]
    moneyType.forEach((v) => {
        change[v] = 0
        while (balance >= v) {
            balance = balance - v
            change[v] += 1
        }
    })
    console.log("change: ", change)
}


async function payMoney() {
    const tempBalance = await readUserInput('\nHow much money do you put in? ');
    console.log(tempBalance, "   coin")
    balance += Number(tempBalance)
    console.log(`\nTotal balance is ${balance} yen`)
    console.log("\nWhich drink to buy")
    const product = await readUserInput('Enter the name of the drink. ');
    let isHit = false
    for (let i of drink) {
        if (i.name == product) {
            if (!shouldBuy(i, balance)) {
                console.error("ERROR: You don't have enough money to put in.")
                return
            }
            i.stock -= 1
            isHit = true
            balance -= Number(i.price)
            console.log(`\nThere are ${i.stock} ${i.name} remaining  adn your balance is ${balance} yen\n`)
            for (let i of drink) {
                console.log(`${i.name}    stock:${i.stock}    price:${i.price} `)
            }
        }
    }
    if (!isHit) {
        console.log("No drink of your choice.")
        return
    }
    const next = await readUserInput('\nchoice the number  1:Retry  2:Fin  3:Replenish  4:paying out  ');
    if (next == 1) {
        payMoney()
    } else if (next == 2) {
        console.log("Thanks you for use")
        return
    } else if (next == 3) {
        replenish()
    } else if (next == 4) {
        reject()
    }
};
payMoney()