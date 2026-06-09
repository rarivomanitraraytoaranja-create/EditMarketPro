const products = [
{
    id:1,
    nom:"Pack LUT Cinematic",
    image:"https://via.placeholder.com/600x400",
    video:"https://www.youtube.com/embed/demo",
    description:"Pack professionnel de LUTs cinématiques.",
    prix:"5€",
    categorie:"LUTs",
    downloads:245,
    popular:true,
    paymentUrl:"#"
},

{
    id:2,
    nom:"Template Premiere Pro",
    image:"https://via.placeholder.com/600x400",
    video:"https://www.youtube.com/embed/demo",
    description:"Template moderne Premiere Pro.",
    prix:"10€",
    categorie:"Premiere Pro Templates",
    downloads:120,
    popular:true,
    paymentUrl:"#"
}
];

const productsContainer =
document.getElementById("productsContainer");

const popularProducts =
document.getElementById("popularProducts");

function createCard(product){

return `
<div class="product-card">

<img src="${product.image}" alt="${product.nom}">

<div class="product-info">

<h3 class="product-title">
${product.nom}
</h3>

<p>${product.categorie}</p>

<p class="product-price">
${product.prix}
</p>

<p>
${product.downloads} téléchargements
</p>

<a
href="${product.paymentUrl}"
class="buy-btn"
target="_blank"
>
Acheter
</a>

</div>

</div>
`;
}

if(productsContainer){

productsContainer.innerHTML =
products.map(createCard).join("");

}

if(popularProducts){

popularProducts.innerHTML =
products
.filter(product => product.popular)
.map(createCard)
.join("");

}

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input", e => {

const value =
e.target.value.toLowerCase();

const filtered =
products.filter(product =>

product.nom.toLowerCase().includes(value)
||
product.categorie.toLowerCase().includes(value)
||
product.description.toLowerCase().includes(value)

);

productsContainer.innerHTML =
filtered.map(createCard).join("");

});

}
