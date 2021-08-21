//memory cost
const memoryCost16GB = 180;
const defaultCost = 0;

//storage cost
const storageCost512GB = 100;
const storageCost1TB = 180;

//delivery charge 
const deliveryCharge = 20;

const totalPriceInput = document.getElementById('total-count');

const updatedTotalField = document.getElementById('update-total');

function updateCost(productInfo, price) {
    const priceText = document.getElementById(productInfo + '-cost');
    priceText.innerText = price;
    updateTotal();
}

function updateTotal() {
    const amount = calculateTotalAmount();
    totalPriceInput.innerText = amount;
    updatedTotalField.innerText = amount;
}

function calculateTotalAmount() {
    const bestPrice = document.getElementById('best-price');//main price
    const macPrice = parseInt(bestPrice.innerText);

    const memoryCostInput = document.getElementById('memory-cost');
    const memoryCost = parseInt(memoryCostInput.innerText);

    const storageCostInput = document.getElementById('storage-cost');
    const storageCost = parseInt(storageCostInput.innerText);
    
    const deliveryCostInput = document.getElementById('delivery-cost');
    const totalDeliveryCost = parseInt(deliveryCostInput.innerText);

    const totalCount = macPrice + memoryCost + storageCost + totalDeliveryCost;
    return totalCount;
}


//onclick event for memory
function upgradeMemory(memorySize) {
    if (memorySize == "16GB") {
        updateCost('memory', memoryCost16GB);
    }
    else {
        updateCost('memory', defaultCost);
    }
}

//onclick event for storage
function upgradeStorageSSD(storageSize) {
    if (storageSize == '512GB') {
        updateCost('storage', storageCost512GB);
    }
    else if (storageSize == '1TB') {
        updateCost('storage', storageCost1TB);
    }
    else {
        updateCost('storage', defaultCost);
    }
}

//onclick event for delivery cost
function deliveryCost(deliveryOption) {
    if (deliveryOption == 'free') {
        updateCost('delivery', defaultCost);
    }
    else if (deliveryOption == 'urgent') {
        updateCost('delivery', deliveryCharge);
    }
}

//Add event handler for promo code
document.getElementById("apply-btn").addEventListener('click', function () {
    //promo code field
    const promoCodeInput = document.getElementById('promo-code');
    //previous amount before getting discount
    const amountBeforeDiscount = parseInt(totalPriceInput.innerText);
    if (promoCodeInput.value == 'stevekaku') {
        const discount = amountBeforeDiscount / 5; //for 20% disount
        const discountPrice = amountBeforeDiscount - discount;
        updatedTotalField.innerText = discountPrice;
        promoCodeInput.value = '';
    }
});

