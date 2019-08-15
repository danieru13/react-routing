import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {

    const URL = 'https://fortnite-api.theapinetwork.com/upcoming/get';
    const KEY = 'YOUR_KEY_HERE';

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch(URL, {method: 'GET', headers:{
                'Authorization': KEY}});
            
            const items = await data.json();    

            console.log(items.data);
            setItems(items.data);
        }

        fetchItems();
    },[]);
  return (
    <div>
      {items.map(item => (
        <h1 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>  
      ))}
    </div>
  );
}

export default Shop;
