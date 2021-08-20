let totalPrice = grandTotal()

// convert text to price 
function textToPrice(price) {
    let priceText = document.getElementById(price).innerText;
    let priceFloat = parseFloat(priceText);
    return priceFloat;
}

// total and grand total
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

// useing promo 
function promoCal(price) {
    let total = 0;
    let grandTotal = 0
    let couponTxt = document.getElementById('promoId').value;
    price = textToPrice('totalPrice')
    if (couponTxt == 'stevekaku') {
        total = price * .2;
        grandTotal = price - total;
    }
    else {
        grandTotal = price;
    }
    document.getElementById('grandTotal').innerText = grandTotal;
    console.log(grandTotal);
}

// click on Promo and calculate the total if promo is valid 
document.getElementById('promoBtnId').addEventListener('click', function () {
    promoCal(totalPrice);
})

function valueupdate(id, price) {
    document.getElementById(id).innerText = price;
    grandTotal()
}

// click on first memory 
document.getElementById('memoryOne').addEventListener('click', function () {
    valueupdate('extraMemoryCost', 0)
})
// click on second memory
document.getElementById('memoryTwo').addEventListener('click', function () {
    valueupdate('extraMemoryCost', 180)
})

// click on storage
document.getElementById('storageOne').addEventListener('click', function () {
    valueupdate('extraStorageCost', 0)
})
document.getElementById('storageTwo').addEventListener('click', function () {
    valueupdate('extraStorageCost', 100)
})
document.getElementById('storageThree').addEventListener('click', function () {
    valueupdate('extraStorageCost', 180)
})

// click on delivery timeline
document.getElementById('deliveryOne').addEventListener('click', function () {
    valueupdate('deliveryCharge', 0)
})
document.getElementById('deliveryTwo').addEventListener('click', function () {
    valueupdate('deliveryCharge', 20)
})
