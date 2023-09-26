var restaurant = [250000, 710000, 125000]

const giveTips = restaurant => {
    // kode disini
    let totalTips = 0;
    for (let tips of restaurant) {
        let tip;
        if (tips > 500000) {
            tip = tips * 10 / 100
        } else if (tips >= 250000 && tips <= 500000) {
            tip = tips * 15 / 100
        } else {
            tip = tips * 20 / 100)
        }
        totalTips += tip;
    }
    return totalTips;
}
const payment = restaurant => {
    // kode disini
    let totalTagihan = 0;
    for (let tagihan of restaurant) {
        totalTagihan += tagihan
    }
    return totalTagihan
}

const tips = giveTips(restaurant);
const bill = payment(restaurant);

console.log(`Total Tagihan : ${bill}`);
console.log(`Total Tips : ${tips}`);
console.log(`Total Tagihan dan Tips : ${bill + tips}`);


/*
Salah Soalll
Total Tagihan : 1085000
Total Tips : 133500
Total Tagihan dan Tips : 1218400 harusnya 1218500
*/
