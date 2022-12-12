import React, { useState } from 'react';

const Add = () => {
    const [product, setProduct] = useState({});

    const handleAddProducts = (event) => {
        event.preventDefault();
        console.log(product);

        fetch('http://localhost:5000/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                alert("Product Successfully Added");
                event.target.reset();
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
            <h2>Add a product</h2>
            <form onSubmit={handleAddProducts}>
                <input onChange={handleInputChange} type="text" name="name" placeholder='Product Name' required/>
                <br />
                <input onChange={handleInputChange} type="text" name="price" placeholder='Product Price' required/>
                <br />
                <input onChange={handleInputChange} type="text" name="photoURL" placeholder='Photo URL' />
                <br />
                <input onChange={handleInputChange} type="text" name="quantity" placeholder='Product Quantity' required/>
                <br />
                <button type='submit'>Add Product</button>
            </form>
        </div>
    );
};

export default Add;