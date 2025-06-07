const products = [
    {
        id: 0,
        name: 'Lenovo LOQ laptop',
        description: "High-end gaming laptop",
        price: 125000,
    }
];

function showHome() {
    let str = "<div>";
    products.forEach((product) => {
        str += `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <h3>${product.price}</h3>
        <button>Add to Cart</button>
        `;
    });
    str += "</div>";

    document.getElementById("root").innerHTML = str;
}