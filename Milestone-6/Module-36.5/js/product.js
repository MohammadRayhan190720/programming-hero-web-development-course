const addProduct = () =>{
  const product = document.getElementById("product-name").value ;
  const quentity = document.getElementById("product-quentity").value ;
  displayProduct(product,quentity)
  saveLocalstroage(product,quentity)
}

const displayProduct = (product,quentity) =>{
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product} ${quentity}`;

  productContainer.appendChild(li);

}

const getShopingCart = () =>{
  let cart = {};
  const productCart = localStorage.getItem("cart");

  if (productCart){
    cart = JSON.stringify(productCart);
  }
  return cart;
}


const saveLocalstroage = (product,quentity) =>{
 const cart = getShopingCart();
 cart[product] = quentity; // object ar modde key and value avabe set kora hoy
 console.log(cart);
}