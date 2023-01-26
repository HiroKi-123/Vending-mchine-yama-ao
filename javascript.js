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
console.log("Which one do you want?")
console.log("If you want to buy a drink, put some money in it.")



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
async function payMoney() {
    const res = await readUserInput('How much money do you put in? ');
    console.log(res, "   coin")
    return res
};

payMoney()