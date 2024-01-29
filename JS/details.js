

async function getProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    console.log(id);
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(response);
    const productDetails = response.data;
    console.log(productDetails);
    const { title, description, price, images } = productDetails;
    const productImages = images.map(function (ele) {
        return `
        <img src="${ele}" alt=""/>
        `;
    }).join("");
    document.querySelector(".images").innerHTML = productImages;
    document.querySelector(".product-details .title").innerHTML = title;
    document.querySelector(".product-details .description").innerHTML += description;
    document.querySelector(".product-details .price").innerHTML += price;

}
getProductDetails();