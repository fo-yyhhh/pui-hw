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



function removeItem(id){
    let index = 0
    for (template of cart){
        if (index === id) {
            cart.delete(template);
            displayTemplate(cart);
            calculateTotalPrice(cart);
            saveToLocalStorage();
            break;
        }
        index++;
    }
}


function displayTemplate(cart){
    let cartContainer = document.querySelector("#cartObject-template");
    cartContainer.innerText = '';
    let index=-1;
    for (eachObject of cart) {
        let cartObject = document.createElement("div");
        cartObject.classList.add("cartItem");
        index +=1;
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
                <p class="remove" id=${index} onclick="removeItem(${index})">Remove</p>
        `;

    cartContainer.appendChild(cartObject);
    }
}

let priceTotal=document.querySelector("#priceTotal");
let totalPrice=0

function calculateTotalPrice(cart){
    totalPrice=0;
    for (eachObject of cart) {
        totalPrice+=Number(eachObject.rollPrice);
    }
    priceTotal.textContent = '$' +totalPrice.toFixed(2);
}



function saveToLocalStorage() {
    const cartArray = Array.from(cart);
    console.log(cartArray);
    
    const cartArrayString = JSON.stringify(cartArray);
    console.log(cartArrayString);
    
    localStorage.setItem('storedCart', cartArrayString);
  }
  
function retrieveFromLocalStorage() {
      const cartArrayString = localStorage.getItem('storedCart');
      const cartArray = JSON.parse(cartArrayString);
      for (const cartData of cartArray) {
          const roll = new Roll(cartData.type, cartData.glazing, cartData.size, cartData.rollPrice);
          cart.add(roll);
        }
    }
    
    if (localStorage.getItem('storedCart') != null) {
        retrieveFromLocalStorage();
    }
    

displayTemplate(cart)
calculateTotalPrice(cart);


