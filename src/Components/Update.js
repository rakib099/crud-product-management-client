import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedProduct = useLoaderData();
    const [product, setProduct] = useState(storedProduct);
    const {_id, name, price, photoURL, quantity} = storedProduct;

    const handleUpdateProducts = (event) => {
        event.preventDefault();
        console.log(product);

        fetch(`http://localhost:5000/update/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                alert("Product Successfully Updated");
            }
        })
        .catch(err => console.error(err));
    }

    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newProduct = {...product};
        newProduct[field] = value;
        setProduct(newProduct);
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleUpdateProducts}>
                <input onChange={handleInputChange} type="text" name="name" defaultValue={name} placeholder='Product Name' required/>
                <br />
                <input onChange={handleInputChange} type="text" name="price" defaultValue={price} placeholder='Product Price' required/>
                <br />
                <input onChange={handleInputChange} type="text" name="photoURL" defaultValue={photoURL} placeholder='Photo URL' />
                <br />
                <input onChange={handleInputChange} type="text" name="quantity" defaultValue={quantity} placeholder='Product Quantity' required/>
                <br />
                <button type='submit'>Update Product</button>
            </form>
        </div>
    );
};

export default Update;