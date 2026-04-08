// 🔥 GLOBAL CART SYSTEM

function getCartKey(){
    let user = JSON.parse(localStorage.getItem("user"));
    return user ? "cart_" + user.email : "cart_guest";
}

function getCart(){
    let key = getCartKey();
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveCart(cart){
    let key = getCartKey();
    localStorage.setItem(key, JSON.stringify(cart));
}

function updateCartCount(){
    let cart = getCart();
    let el = document.querySelector(".cart-count");
    if(el){
        el.innerText = cart.length;
    }
}

// ✅ AUTO RUN ON EVERY PAGE
window.addEventListener("load", updateCartCount);