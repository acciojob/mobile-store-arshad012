import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const AdminProduct = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const [newTitle, setNewTitle] = useState("");

    useEffect(() => {
        getProduct(id);
    },[])

    const getProduct = (id) => {
        let ItemsData = JSON.parse(localStorage.getItem('ItemsData'));
        let data = {};
    
        for(let el of ItemsData) {
            if(el.id == id) {
                data = el;
                break;
            }
        }

        setData(data);
    }

    const handleSave = () => {
        let ItemsData = JSON.parse(localStorage.getItem('ItemsData'));

        for(let el of ItemsData) {
            if(el.id == id) {
                el.title = newTitle;
                break;
            }
        }

        localStorage.setItem('ItemsData', JSON.stringify(ItemsData));
        getProduct(id);
        setNewTitle("");
    }

    return (
        <div className="item">
            <div>
                <img src={data.image} alt={data.title} width={200} />
                <p>{data.category}</p>
                <h3>{data.title}</h3>
                <input type="text" placeholder="New Title" onChange={(e) => setNewTitle(e.target.value)} />
                <button onClick={handleSave}>Save</button>
                <p>{data.description}</p>
                <Link to='/admin'>Go back</Link>
            </div>
        </div>
    )
}

export default AdminProduct;