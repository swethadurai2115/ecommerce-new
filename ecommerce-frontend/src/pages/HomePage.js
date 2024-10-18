import { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/products?${searchParams}`);
                
                // Check if the response is OK
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchProducts();
    }, [searchParams]);

    return (
        <Fragment>
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} /> // Ensure each ProductCard has a unique key
                    ))} 
                </div>
            </section>
        </Fragment>
    );
}
