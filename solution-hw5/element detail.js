let cart = [];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const rollName = document.querySelector('#rollName');
rollName.innerText = rollType + ' Cinnamon Roll'

const rollPicture = document.querySelector('#rollPicture');
rollPicture.src = '../assets/products/'+rolls[rollType].imageFile;


let totalPrice = document.querySelector('#totalPrice');
let basePrice = rolls[rollType].basePrice;
totalPrice.textContent = "$ "+basePrice;


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
        packsize: 1,
        packprice: 1,
    },
    {
        packsize: 3,
        packprice: 3,
    },
    {
        packsize: 6,
        packprice: 5,
    },
    {
        packsize: 12,
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


let glazingPrice = 0;
let packsizePrice = 1;
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



class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}



function addtoCart(){
    let rollGlazing = document.querySelector('#glazingOptions');
    let packSize = document.querySelector('#packSizeOptions');
    let roll = new Roll(rollType,rollGlazing.options[rollGlazing.selectedIndex].text,packSize.options[packSize.selectedIndex].text,basePrice);
    cart.push(roll);
    console.log(cart);
}