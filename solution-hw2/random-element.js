let allGlaze=[
    {
        name:"Keep original", 
        price: 0.00,
    },
    {
        name:"Sugar milk",
        price: 0.00,
    },
    {
        name:"Vanilla milk",
        price: 0.50,
    },
    {
        name:"Double chocolate",
        price: 1.50,
    },
];

let allPack=[
    {
        packsize:1,
        packprice: 1,
    },
    {
        packsize:3,
        packprice: 3,
    },
    {
        packsize:6,
        packprice: 5,
    },
    {
        packsize:12,
        packprice: 10,
    },
];

let selectGlazing = document.querySelector('#glazingOptions');

for ( let i = 0; i <allGlaze.length; i++){
    let option = document.createElement('option');
    option.text = allGlaze[i].name;
    option.value = allGlaze[i].price; 
    selectGlazing.add(option);
}

let selectPack = document.querySelector('#packSizeOptions');

for ( let i = 0; i <allGlaze.length; i++){
    let option = document.createElement('option');
    option.text = allPack[i].packsize;
    option.value = allPack[i].packprice; 
    selectPack.add(option);
}


let totalPrice = document.querySelector('#totalPrice');
let glazingPrice = 0;
let packsizePrice = 1;
const basePrice = 2.49;
let priceOutput = basePrice;

function generatePrice(glazingPrice,packsizePrice){
    priceOutput = (basePrice + parseFloat(glazingPrice))*parseInt(packsizePrice);
    priceOutput = priceOutput.toFixed(2);
    totalPrice.textContent = "$ "+priceOutput;
}

function glazingChange(element){
    glazingPrice = element.value;
    generatePrice(glazingPrice,packsizePrice);
}

function packChange(element){
    packsizePrice = element.value;
    generatePrice(glazingPrice,packsizePrice);
}

