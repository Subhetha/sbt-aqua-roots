const productContainer =
document.getElementById(
"product-container"
);

products.forEach(product => {

productContainer.innerHTML += `

<div class="card">

<img
src="${product.image}"
alt="${product.name}"
>

<h3>

${product.name}

</h3>

<h2>

${product.price}

</h2>

<p>

${product.description}

</p>

<a
href="product.html?id=${product.id}"
>

<button>

View Details

</button>

</a>

</div>

`;

});