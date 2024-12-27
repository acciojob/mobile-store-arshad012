import React, {useEffect, useState} from "react";
import regeneratorRuntime from "regenerator-runtime";
import {Link} from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        try {
            async function getProducts() {
                const response = await fetch('https://fakestoreapi.com/products');
                const res = await response.json();
                setLoading(false);
                setData(res);
            }
            
            getProducts();
        } catch (error) {
            setLoading(false);
            console.log('error:', error);
        }
    
      }, [])

    return loading ? <h1>Loading....</h1> : (
        <div>
            <h1>Products</h1>
            <div>
                {
                    data.map((item) => (
                        <Link key={item.id} to={'/products/'+item.id}>
                            <div className="item">
                                <img src={item.image} alt={item.title} width={200}/>
                                <p>{item.category}</p>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Products;