export default function Listrendering () {
    const products = [
        {id: 1, name: 'laptop', price: 900 },
        {id: 2, name: 'phone', price: 600 },
        {id: 3, name: 'modem', price: 50 },
        {id: 4, name: 'tablet', price: 500 }
    ];
    const productsList = products.map((product) => <h3 key={product.id}>{product.id}. {product.name}: ${product.price}</h3>);

    return <div>{productsList}</div>;
}