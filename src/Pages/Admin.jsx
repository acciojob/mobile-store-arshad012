import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import { Link } from 'react-router-dom';
// import { ItemsData } from "../Utils/ItemsData";

const Admin = () => {
    const [data, setData] = useState([]);

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

    const handleDelete = (id) => {
        const dataAfterDelete = data.filter((item) => item.id != id);
        setData(dataAfterDelete);
    }

    return (
        <div>
            <div>
                {
                    data.map((item) => (
                        <div className="item admin-page-items" key={item.id}>
                            <img src={item.image} alt={item.title} width={70} />
                            <p>{item.title}</p>
                            <button className="btn"><Link to={'/admin/products/'+item.id}>Actions</Link></button>
                            <button className="btn" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Admin;