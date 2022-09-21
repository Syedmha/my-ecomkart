
const filterProductsByCategory = (productsData, categories) => {

    const { electronics, jewelery, Mens, Womens } = categories

    const getCategoryLabel = {
        electronics: "electronics",
        jewelery: "jewelery",
        mens: "men's clothing",
        womens: "women's clothing"
    }

    if (Object.values(categories).every(val => !val)) {
        return productsData;
    }
    else {
        return Object.keys(categories).reduce((filteredData, currKey) => categories[currKey] ? [...filteredData, ...productsData.filter(product => product.category === getCategoryLabel[currKey])] : [...filteredData], []);
    }
}
export { filterProductsByCategory }