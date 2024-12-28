import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import { Link, useParams } from 'react-router-dom';
import { ItemsData } from "../Utils/ItemsData";

const SingleProduct = () => {
    const { id } = useParams();
    let data = {};

    for(let el of ItemsData) {
        if(el.id == id) {
            data = el;
            break;
        }
    }

    /*
    useEffect(() => {
        setLoading(true);

        try {
            async function getProducts() {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
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
    */

    return (
        <div className="item">
            <div>
                <img src={data.image} alt={data.title} width={200} />
                <p>{data.category}</p>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <Link to='/'>Go back</Link>
            </div>
        </div>
    )
}

export default SingleProduct;