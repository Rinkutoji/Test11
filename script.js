let products = []
let card = []

let showProduct = document.getElementById('show-product');
let  cartItem = document.getElementById('cart-item');
let cartCount = document.getElementById('cart-count');
let searchInput = document.getElementById('input-search');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        products = data;
        // console.log(data);
        displayProducts(products);
    })
    .catch(err => console.error("Error fetching products:", err));

// ================= DISPLAY PRODUCTS =================
function displayProducts(data){
    showProduct.innerHTML = "";

    data.forEach(p => {
        showProduct.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm">
                <img src="${p.image}" class="card-img-top p-3" style="height:200px;object-fit:contain;">
                <div class="card-body text-center">
                    <h5>${p.title}</h5>
                    <p class="fw-bold text-warning">$${p.price}</p>
                    <button onclick="addToCart(${p.id})" class="btn btn-dark w-100">
                    Add To Cart
                    </button>
                </div>
                </div>
            </div>
        `;
    });
}