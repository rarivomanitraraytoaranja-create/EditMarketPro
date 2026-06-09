async function loadProducts() {

    try {

        const response = await fetch("data/products.json");
        const products = await response.json();

        const productsContainer =
        document.getElementById("productsContainer");

        const popularProducts =
        document.getElementById("popularProducts");

        function createCard(product) {

            return `
            <a href="product.html?id=${product.id}" style="text-decoration:none;color:white;">

                <div class="product-card">

                    <img src="${product.image}" alt="${product.nom}">

                    <div class="product-info">

                        <h3 class="product-title">
                            ${product.nom}
                        </h3>

                        <p>
                            ${product.categorie}
                        </p>

                        <p class="product-price">
                            ${product.prix}
                        </p>

                        <p>
                            ${product.downloads} téléchargements
                        </p>

                        <div class="buy-btn">
                            Voir le produit
                        </div>

                    </div>

                </div>

            </a>
            `;
        }

        if (productsContainer) {

            productsContainer.innerHTML =
            products.map(createCard).join("");

        }

        if (popularProducts) {

            popularProducts.innerHTML =
            products
            .filter(product => product.popular)
            .map(createCard)
            .join("");

        }

        const searchInput =
        document.getElementById("searchInput");

        if (searchInput) {

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

    } catch (error) {

        console.error("Erreur chargement produits :", error);

    }

}

loadProducts();
