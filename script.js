//testing git
function fetchProducts(category) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'fetch_products.php', true);
    xhr.onload = function() {
        if (this.status === 200) {
            let products = JSON.parse(this.responseText);
            displayProducts(products, category);
        }
    };
    xhr.onerror = function() {
        console.error('Error fetching data from the server.');
    };
    xhr.send();
}

function displayProducts(products, category) {
    let output = `<h3>${category}</h3><table><tr><th>ID</th><th>Name</th><th>Price</th><th>Image</th></tr>`;
    products.forEach(product => {
        if (product.category === category) {
            output += `<tr><td>${product.id}</td><td>${product.name}</td><td>${product.price}</td><td><img src="images/${product.image}" alt="${product.name}" width="50"></td></tr>`;
        }
    });
    output += `</table>`;
    document.getElementById('product-table').innerHTML = output;
}

function searchProducts(event) {
    event.preventDefault();
    let keyword = document.getElementById('search-keyword').value;
    let minPrice = document.getElementById('min-price').value;
    let maxPrice = document.getElementById('max-price').value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `fetch_products.php?keyword=${keyword}&minPrice=${minPrice}&maxPrice=${maxPrice}`, true);
    xhr.onload = function() {
        if (this.status === 200) {
            let products = JSON.parse(this.responseText);
            displaySearchResults(products);
        }
    };
    xhr.onerror = function() {
        console.error('Error fetching data from the server.');
    };
    xhr.send();
}

function displaySearchResults(products) {
    let output = `<h3>Search Results</h3><table><tr><th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Image</th></tr>`;
    products.forEach(product => {
        output += `<tr><td>${product.id}</td><td>${product.name}</td><td>${product.category}</td><td>${product.price}</td><td><img src="images/${product.image}" alt="${product.name}" width="50"></td></tr>`;
    });
    output += `</table>`;
    document.getElementById('search-results').innerHTML = output;
}
