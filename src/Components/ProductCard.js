import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, displayProducts, setDisplayProducts }) => {
    const { _id, name, photoURL, price, quantity } = product;

    const handleProductDelete = () => {
        const confirm = window.confirm(`Are you sure about deleting ${name}`);

        if (confirm) {
            fetch(`http://localhost:5000/products/${_id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert(`${name} successfully deleted`);
                        const remaining = displayProducts.filter(prd => prd._id !== _id);
                        setDisplayProducts(remaining);
                    }
                })
                .catch(err => console.error(err));
        }
        else {
            console.log("Product deletion aborted");
        }
    }

    return (
        <div className='card'>
            <img src={photoURL} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <Link to={`/update/${_id}`}>
                <button>Update</button>
            </Link>
            <button onClick={handleProductDelete}>Delete</button>
        </div>
    );
};

export default ProductCard;