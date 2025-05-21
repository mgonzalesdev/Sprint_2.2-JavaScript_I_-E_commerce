// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    const product = products.find(prod => prod.id === id);
    if (product === undefined) {
        alert("Error identificador de producto no válido");
    } else {
        const indice = cart.findIndex(prod => prod.id === id);
        if (indice == -1) {
            const productAdd = { ...product };
            Object.defineProperty(productAdd, "quantity", {
                value: 1,
                writable: true,  // Permite modificar el valor
                enumerable: true,  // Permite listar la propiedad con for...in
                configurable: false,  // Permite modificar o eliminar la propiedad
            });           
            cart.push(productAdd);
        } else {
            cart[indice].quantity++;
        }
        updateCartCount();
        applyPromotionsCart();
        calculateTotal();
        console.log(cart);
    }
}

// Exercise 2
function cleanCart() {
    const myModal1 = new bootstrap.Modal('#confirmModal');
    myModal1.show();
    document.getElementById('aceptClear').addEventListener('click', () => {
        cart.length = 0;
        updateCartCount();
        showCartMessage();
        myModal1.hide();
    });
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;
    cart.forEach(product => {
        if (product.hasOwnProperty("subtotalWithDiscount"))
            total += product.subtotalWithDiscount;
        else {
            total += product.quantity * product.price;
        }
    });

    console.log(total);
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(product => {
        validatePromotion(product);
    });
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    if (cart.length > 0) {
        let cartList = document.getElementById("cart_list");

        let rows = ""
        cart.forEach(product => {
            rows += `<tr>
                    <th scope="row">${product.name}</th>
                    <td>$${product.price}</td>
                    <td>${product.quantity}</td>
                    <td>$${(product.hasOwnProperty("subtotalWithDiscount") ? product.subtotalWithDiscount : (product.quantity * product.price))}</td>
                    <td><button type="button" onclick="removeFromCart(${product.id})" class="btn btn-outline-dark"><i class="fa fa-trash-can"></i></button></td>
                </tr>`
        });
        cartList.innerHTML = rows;
        document.getElementById("total_price").innerHTML = total;
    }
    showCartMessage();
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    console.log(cart);
    let index = cart.findIndex(producto => producto.id === id)
    if (index == -1)
        alert("Producto no encontrado");
    else {
        if (cart[index].quantity == 1) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity--;
            validatePromotion(cart[index]);
        }
        updateCartCount();
        calculateTotal();
        printCart();
    }
}

function open_modal() {
    printCart();
}

//Funciones Auxiliares
function updateCartCount() {
    let count = cart.reduce((totalProduct, product) => totalProduct + product.quantity, 0);
    document.getElementById("count_product").innerHTML = count;

}

function confirmModal() {
    alert("Confirmacion");
    myModal.modal('hide');
}

function validatePromotion(product) {
    if (product.hasOwnProperty("offer")) {
        if (product.quantity >= product.offer.number) {
            let subtotal = product.quantity * product.price * (1 - (product.offer.percent / 100));
            product.subtotalWithDiscount = +subtotal.toFixed(2);
        } else {
            delete product.subtotalWithDiscount;
        }
    }
}

function showCartMessage() {
    let shoppingCart = document.getElementById("shoppingCart");
    let emptyCart = document.getElementById("empty_car");
    if (cart.length == 0) {
        shoppingCart.classList.add("d-none");
        emptyCart.classList.remove("d-none");
    } else {
        emptyCart.classList.add("d-none");
        shoppingCart.classList.remove("d-none");
    }

}

window.addEventListener('hide.bs.modal', () => {
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
});