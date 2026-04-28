let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function displayCart() {
    let container = document.getElementById("cart");
    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <p>${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button></p>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let name = products[i].innerText.toLowerCase();
        products[i].style.display = name.includes(input) ? "" : "none";
    }
}
