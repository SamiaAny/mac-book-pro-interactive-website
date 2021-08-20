//memory cost
const memoryCost16GB = 180;

//storage cost
const storageCost512GB = 100;
const storageCost1TB = 180;

//delivery charge 
const deliveryCharge = 20;

const bestPrice = document.getElementById('best-price');

const memoryCostInput = document.getElementById('memory-cost');

const storageCostInput = document.getElementById('storage-cost');

const deliveryCostInput = document.getElementById('delivery-cost');

const totalPriceInput = document.getElementById('total-count');

const totalField = document.getElementById('total');

//onclick event for memory
function unifiedMemory(memorySize) {
    // const memoryCostInput = document.getElementById('memory-cost');
    const memoryCostInputText = memoryCostInput.innerText;
    if (memorySize == "16GB") {
        memoryCostInput.innerText = memoryCost16GB;
    }
    else {
        memoryCostInput.innerText = 0;
    }
    updateTotal(); 
}


//onclick event for storage
function storageSSD(storageSize) {
    // const storageCostInput = document.getElementById('storage-cost');
    if (storageSize == '512GB') {
        storageCostInput.innerText = storageCost512GB;
    }
    else if (storageSize == '1TB') {
        storageCostInput.innerText = storageCost1TB;
    }
    else {
        storageCostInput.innerText = 0;
    }
    updateTotal();
}

//onclick event for delivery cost
function deliveryCost(delOption) {
    // const deliveryCostInput = document.getElementById('delivery-cost');
    if (delOption == 'free') {
        deliveryCostInput.innerText = 0;
    }
    else if (delOption == 'urgent') {
        deliveryCostInput.innerText = deliveryCharge;
    }
    updateTotal();
}

function calculateTotalAmount() {
    const macPrice = parseInt(bestPrice.innerText);
    const memoryCost = parseInt(memoryCostInput.innerText);
    const storageCost = parseInt(storageCostInput.innerText);
    const totalDeliveryCost = parseInt(deliveryCostInput.innerText);

    const totalCount = macPrice + memoryCost + storageCost + totalDeliveryCost;
    return totalCount;
}

function updateTotal() {
    const amount = calculateTotalAmount();
    totalPriceInput.innerText = amount;
    totalField.innerText = amount;
}

//Add event handler for promo code
document.getElementById("apply-btn").addEventListener('click',function(){
    const promoCodeInput = document.getElementById('promo-code');
    const amountBeforeDiscount = parseInt(totalPriceInput.innerText);
    if (promoCodeInput.value == 'stevekaku') {
        const discount = amountBeforeDiscount / 5; //for 20% disount
        const discountPrice = amountBeforeDiscount - discount;
        totalField.innerText = discountPrice;
        promoCodeInput.value = '';
    }
});

