document.addEventListener("DOMContentLoaded", function () {
    const categoriesList = document.getElementById("categories");
    const productsList = document.getElementById("products");
    const productInfo = document.getElementById("product-info");
    const buyButton = document.createElement("button");
    buyButton.textContent = "Купити";
    buyButton.style.display = "none";

    const data = {
        category1: [
            {
                name: "Іграшка 1",
                price: 20,
                description: "Дуже цікава іграшка 1.",
            },
            {
                name: "Іграшка 2",
                price: 25,
                description: "Цікава іграшка 2 для гри.",
            },
            {
                name: "Іграшка 3",
                price: 30,
                description: "Іграшка 3 для веселої гри.",
            },
        ],
        category2: [
            {
                name: "Іграшка 4",
                price: 22,
                description: "Весела іграшка 4 для дітей.",
            },
            {
                name: "Іграшка 5",
                price: 18,
                description: "Дитяча іграшка 5.",
            },
            {
                name: "Іграшка 6",
                price: 28,
                description: "Іграшка 6 для розваг.",
            },
        ],
    };

    let lastSelectedProduct = null;

    function showProducts(category) {
        const products = data[category];
        productsList.innerHTML = "";
        products.forEach((product) => {
            const listItem = document.createElement("li");
            listItem.textContent = product.name;

            listItem.addEventListener("click", () => {
                showProductInfo(product);
                lastSelectedProduct = product;
            });

            productsList.appendChild(listItem);
        });
    }

    function showProductInfo(product) {
        productInfo.innerHTML = `
            <p>Назва товару: ${product.name}</p>
            <p>Ціна: $${product.price}</p>
            <p>Опис: ${product.description}</p>
        `;
        productInfo.appendChild(buyButton);
        buyButton.style.display = "block";

        buyButton.addEventListener("click", () => {
            if (lastSelectedProduct) {
                alert(`Товар "${lastSelectedProduct.name}" куплено за $${lastSelectedProduct.price}.`);
                resetPage();
            }
        });
    }

    function resetPage() {
        productInfo.innerHTML = "";
        buyButton.style.display = "none";
        lastSelectedProduct = null;
    }

    categoriesList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            const category = event.target.dataset.category;
            showProducts(category);
        }
    });

    resetPage();
    showProducts("category1");
});