import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import { Link } from 'react-router-dom';
// import { ItemsData } from "../Utils/ItemsData";

const Products = () => {
    const [data, setData] = useState([]);

    // localStorage.setItem('ItemsData', JSON.stringify(ItemsData));

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('ItemsData'));
        setData(data);
    },[])


    /*
    useEffect(() => {
        setLoading(true);

        try {
            async function getProducts() {
                const response = await fetch('https://fakestoreapi.com/products');
                const res = await response.json();
                console.log('res:', res)
                setLoading(false);
                setData(res);
            }

            getProducts();
        } catch (error) {
            setLoading(false);
            setError(true);
            console.log('error:', error);
        }

        return () => {
            console.log('cleaup called');
            setLoading(false);
            setError(true);
        }

      }, [])
      */

    return (
        <div>
            <h1>Products</h1>
            <div>
                {
                    data.map((item) => (
                        <div className="item" key={item.id}>
                            <img src={item.image} alt={item.title} width={150}/>
                            <h3>{item.title}</h3>
                            <button className="btn"><Link key={item.id} to={'/products/'+item.id}>Buy</Link></button>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default Products;