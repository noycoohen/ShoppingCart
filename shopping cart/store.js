let products = [
  ["paris shirt", 40],
  ["byren shirt", 25],
  ["barcelona shirt", 35],
];
let shoppingcart = [];

function addProduct(productName, productPrice) {
  shoppingcart.push([productName, productPrice]);
  anotherFunc(shoppingcart);
  console.log(shoppingcart);
}

function anotherFunc(cart) {
  let getElement = document.getElementById("reciveDiv");
  getElement.innerHTML = "";
  console.log(cart);
  for (let i = 0; i < cart.length; i++) {
    let nameText = document.createTextNode(cart[i][0]);
    let nameHolder = document.createElement("span");
    nameHolder.appendChild(nameText);

    let priceText = document.createTextNode(cart[i][1] + "$");
    let priceHolder = document.createElement("span");
    priceHolder.appendChild(priceText);

    let delBtn = document.createElement("button");
    delBtn.onclick = function () {
      newDiv.remove();
      remove2(i);
    };

    delBtn.style.backgroundImage = "url('media/icon2.jpg')";
    delBtn.style.width = "26px";
    delBtn.style.height = "26px";
    delBtn.style.border = "none";
    delBtn.style.backgroundColor = "transparent";
    delBtn.style.backgroundSize = "contain";

    let newDiv = document.createElement("div");
    newDiv.append(nameHolder, priceHolder, delBtn);

    getElement.appendChild(newDiv);
    // console.log(priceHolder);
  }
}

function remove2(num) {
  shoppingcart.splice(num, 1);
  anotherFunc(shoppingcart);
}

function Totalprice() {
  let overallprice = 0;
  console.log(shoppingcart);
  for (let i = 0; i < shoppingcart.length; i++) {
    document.getElementById("totalprice").innerHTML = "";
    overallprice = Number(overallprice) + Number(shoppingcart[i][1]);
    console.log(overallprice);
    let textTotal = document.createElement("h3");
    textTotal.textContent = overallprice + "$" + " Total";
    document.getElementById("totalprice").appendChild(textTotal);
  }
}

totalsum.addEventListener("click", Totalprice);
