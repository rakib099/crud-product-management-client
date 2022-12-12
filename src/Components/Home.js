import React, { useState } from 'react';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Home = () => {
    const storedProducts = useLoaderData();
    const [displayProducts, setDisplayProducts] = useState(storedProducts);

    return (
        <div>
            <h2>Products: {displayProducts.length}</h2>
            <div className="product-container">
                {
                    displayProducts.map(prd => <ProductCard
                        key={prd._id}
                        product={prd}
                        displayProducts={displayProducts}
                        setDisplayProducts={setDisplayProducts}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;