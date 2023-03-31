const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))
// module.exports = { sum }


let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

const fromEuroToDollar = (euro) => {
    let dollarAmount = euro*oneEuroIs.USD
    return dollarAmount
}



console.log(fromEuroToDollar(3.5))

const fromDollarToYen = (dollar) => {
    let yenAmount = dollar/ oneEuroIs.USD * oneEuroIs.JPY
    return yenAmount
}

console.log(fromDollarToYen(10))

const fromYenToPound = (yen) => {
    let poundAmount = yen / oneEuroIs.JPY * oneEuroIs.GBP
    return poundAmount
}

console.log(fromYenToPound(10))

//we can only declare module.exports once, we put all the functions inside the same declaration
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }