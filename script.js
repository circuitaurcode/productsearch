// Product List Array
const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'Headphones', category: 'Accessories' },
    { name: 'Chair', category: 'Furniture' },
    { name: 'Coffee Mug', category: 'Kitchen' },
    { name: 'Notebook', category: 'Stationery' },
];

// Get DOM Elements
const searchInput = document.getElementById('searchInput');
const productList = document.getElementById('productList');

// Function to Display Products
const displayProducts = (filteredProducts) => {
    productList.innerHTML = '';
    filteredProducts.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.category}`;
        productList.appendChild(li);
    });
};

// Initial Display of All Products
displayProducts(products);

// Filter Products on Input
searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
    );
    displayProducts(filteredProducts);
});
