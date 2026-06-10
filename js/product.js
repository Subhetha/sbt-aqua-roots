const params =
new URLSearchParams(
window.location.search
);

const productId =
parseInt(
params.get("id")
);

const product =
products.find(
item => item.id === productId
);

const container =
document.getElementById(
"product-details"
);

if(product){

container.innerHTML = `

<div class="details-card">

<div class="details-image">

<img
src="${product.image}"
alt="${product.name}"
>

</div>

<div class="details-content">

<h1>

${product.name}

</h1>

<h2>

${product.price}

</h2>

<p>

${product.description}

</p>

<h3>

Features

</h3>

<ul>

${product.features
.map(
feature =>
`<li>${feature}</li>`
)
.join("")}

</ul>

<a
href="https://wa.me/919442452059?text=Hello%20I%20am%20interested%20in%20${product.name}"
target="_blank">

<button class="buy-btn">

Enquire Now

</button>

</a>

</div>

</div>

`;

}