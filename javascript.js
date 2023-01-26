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

async function payMoney() {
    const balance = await readUserInput('\nHow much money do you put in? ');
    console.log(balance, "   coin")

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
            console.log(`${i.name}の残数は ${i.stock}`)
        }
    }
    if (!isHit) {
        console.log("No drink of your choice.")
        return
    }
    payMoney()
};
payMoney()

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var lines = [];
// var reader = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// reader.on('line', (I) => {
//     console.log("push手前", I)
//     lines.push(I);
//     reader.close();
// });
// reader.on('close', () => {
//     console.log(lines)
// })


// var reader = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let res = reader.question("What's your name? ", answer => {
//     console.log(`Thank you for your answer : ${answer}`);
//     reader.close();
//     return answer
// })

// console.log(res)