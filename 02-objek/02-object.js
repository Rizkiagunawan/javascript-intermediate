// <---JAWABAN NOMOR 1--->
const person = {
    name: "Rizki",
    age: 100,
    favDrinks: [
    "coffee",
    "jamu temulawak",
    "tea"
    ],
    greeting: function(nama) {
    return console.log("Hello", nama);
    }
}
person.favDrinks[1] = "Tap water"
console.log('JAWABAN NOMOR 1');
console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
person.greeting(person.name);

// <---JAWABAN NOMOR 2--->
function getObjectValue(obj,path) {
    let arrPath = path.split('.');
    for (let i = 0; i < arrPath.length; ++i){
        let j = arrPath[i];
        if (j in obj) {
            obj = obj[j];
        } else {
            return null;
            break;
        }
    }
    return obj;
    }
const milkBasedCoffee = {
name: "latte",
ingredients: {
    espresso: {
    origin: "lampung",
    roastProfile: "medium to dark",
    ratio: 1
},
milk: {
    brand: "susu murni",
    isVegan: false,
    ratio: 5
}    
},
}
const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
console.log('JAWABAN NOMOR 2');
console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

// <---JAWABAN NOMOR 3--->
const items = [
    {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
    },
    {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
    },
    {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
    },
];

    const calculateIncome = (items) => {
    /// EDIT DOWN HERE
    // [sum of (sell - buy)]
//     hitung keuntungan yang kita hasilkan dari tiap-tiap koin dengan cara (sell - buy)
//      ulangi langkah pertama, hingga kita selesai menghitung seluruh history transaksi yang ada (dalam contoh ini kita ada 3 buah history dari hari 1, 2, dan 3)
//      jumlahkan seluruh keuntungan yang kita buat selama 3 hari berdasarkan koin yang kita gunakan
//      rangkuman dari pendapatan kita HARUS berupa sebuah object
//      pengerjaan harus menggunakan built-in method reduce
    
    const dupObjItems = [];
    
    for (let i = 0; i < items.length; i++) {
        
        const item = items[i];
        
        let tempItem = {
        btc: 0,
        doge: 0,
        eth: 0
        };

        const btc = Object.values(item.btc).reduce((buy, sell) => sell - buy );
        const eth = Object.values(item.eth).reduce((buy, sell) => sell - buy );
        const doge = Object.values(item.doge).reduce((buy, sell) => sell - buy );
        tempItem['btc'] = btc;
        tempItem['eth'] = eth;
        tempItem['doge'] = doge;
        dupObjItems.push(tempItem);
        
    }
    
        const result = dupObjItems.reduce(
        (prev, curr ) => {
            curr.btc += prev.btc;
            curr.eth += prev.eth;
            curr.doge += prev.doge;
            return curr;
        },

        { btc: 0, eth: 0, doge:0 }

        );
        return result;
    };
    console.log('JAWABAN NOMOR 3');
    console.log(calculateIncome(items));