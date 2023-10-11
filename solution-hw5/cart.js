let cart = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.rollPrice = rollPrice;
    }
}

function addtoCart(){
    let rollGlazing = document.querySelector('#glazingOptions');
    let packSize = document.querySelector('#packSizeOptions');
    let roll = new Roll(rollType,rollGlazing.options[rollGlazing.selectedIndex].text,packSize.options[packSize.selectedIndex].text,priceOutput);
    cart.add(roll);
    console.log(cart);
}





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

function getGlazingPrice(glazing){
    const glazingName = glazing; 
    let glazingPrice = null; 

    for (const glaze of allGlaze) {
        if (glaze.name === glazingName) {
            glazingPrice = glaze.price;
            return glazingPrice;
        }
    }
}


function getPackPrice(packsize){
    const packingsize = packsize; 
    let packPrice = null; 

    for (const pack of allPack) {
        if (pack.packsize === packingsize) {
            packPrice = pack.packprice;
            return packPrice;
        }
    }
}

function generateTotalPrice(glazing,packsize,basePrice){
    glazingPrice=getGlazingPrice(glazing);
    packsizePrice=getPackPrice(packsize);
    priceOutput = (basePrice + parseFloat(glazingPrice))*parseInt(packsizePrice);
    priceOutput = priceOutput.toFixed(2);
    return priceOutput;
}

/*shopping cart page*/

let cartObject1= new Roll("Original", "Sugar milk", 1, Number(generateTotalPrice("Sugar milk", 1, 2.49)));
let cartObject2= new Roll("Walnut", "Vanilla milk", 12, Number(generateTotalPrice("Vanilla milk", 12, 3.49)));
let cartObject3= new Roll("Raisin", "Sugar milk", 3, Number(generateTotalPrice("Sugar milk", 3, 2.99)));
let cartObject4= new Roll("Apple", "Keep original", 3, Number(generateTotalPrice("Keep original", 3, 3.49)));
cart.add(cartObject1).add(cartObject2).add(cartObject3).add(cartObject4);





function removeItem(eachObject){
    console.log(eachObject);
        cart.delete(eachObject);
        console.log(cart);
        calculateTotalPrice(cart);
    }


let cartContainer = document.querySelector("#cartObject-template");



    for (eachObject of cart) {
        let cartObject = document.createElement("div");
        cartObject.classList.add("cartItem");

        cartObject.innerHTML = `
        <link rel="stylesheet" type="text/css" href="style.css">
            <div class = objectGroupDisplay> 
                <img src="../assets/products/${eachObject.type}-cinnamon-roll.jpg" class="image" alt="raisin" width="200px">
                <div class="cartDescribe">
                    <p>${eachObject.type} Cinnamon Roll</p>
                    <p>Glazing:${eachObject.glazing}</p>
                    <p>Pack Size:${eachObject.size}</p>
                </div>
                <p>$${eachObject.rollPrice}</p>
            </div>
                <p class="remove" onclick="removeItem(eachObject)">Remove</p>
        `;

    cartContainer.appendChild(cartObject);
    }


let priceTotal=document.querySelector("#priceTotal");
let totalPrice=0

function calculateTotalPrice(cart){
    totalPrice=0;
    for (eachObject of cart) {
        totalPrice+=eachObject.rollPrice;
        console.log(totalPrice);
    }
    priceTotal.textContent = '$' +totalPrice;
}

calculateTotalPrice(cart);
