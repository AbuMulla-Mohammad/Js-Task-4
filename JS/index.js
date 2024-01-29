
async function getProducts() {
    const response = await axios.get(`https://dummyjson.com/products`);
    const products = response.data.products;
    console.log(products);
    const result = products.map(function (product) {
            return `<div class="product">
            <img src="${product.thumbnail}"/>
            <h2> product id: ${product.id}</h2>
            <h4>${product.title}</h4>
            <a href="details.html?id=${product.id}">see details</a>
            </div>
            `;
        });
        document.querySelector(".products-section").innerHTML = result.join("");
}
getProducts();