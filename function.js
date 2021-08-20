function textToPrice(price) {
    let priceText = document.getElementById(price).innerText;
    let priceFloat = parseFloat(priceText);
    return priceFloat;
}

function grandTotal() {
    let basePrice = textToPrice('basePrice');
    let extraMemoryCost = textToPrice('extraMemoryCost');
    let extraStorageCost = textToPrice('extraStorageCost');
    let deliveryCharge = textToPrice('deliveryCharge')
    let totalPrice = basePrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    document.getElementById('totalPrice').innerText = totalPrice
    document.getElementById('grandTotal').innerText = totalPrice
    return totalPrice;
}

function promoCal(price) {
    let total = 0;
    let couponTxt = document.getElementById('promoId').value;
    if (couponTxt == 'sohag') {
        total = price * .2;
    }

    return (price - total);
}

let totalPrice = grandTotal()



// click on Promo and calculate the total if promo is valid 
let promoCalculation = document.getElementById('promoBtnId');
promoCalculation.addEventListener('click', function () {
    let grandTotal = promoCal(totalPrice);
    document.getElementById('grandTotal').innerText = grandTotal;
})
