import React, { useState, useEffect } from 'react';
import './App.css';
//import { Link } from 'react-router-dom';

function ItemDetail({ match }) {

    const URL = `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`;
    const KEY = 'YOUR_KEY_HERE';

    const [item, setItem] = useState({images: ''});

    useEffect(() => {
        const fetchItems = async () => {
            const data = await fetch(URL, {method: 'GET', headers:{
                'Authorization': KEY}});
            
            const item = await data.json();    

            console.log(item.data.item);
            setItem(item.data.item);
        }

        fetchItems();
    },[URL]);

  return (
    <div>
      <h1>{item.name}</h1>
      <img alt={item.name} src={item.images.information} />
    </div>
  );
}

export default ItemDetail;
