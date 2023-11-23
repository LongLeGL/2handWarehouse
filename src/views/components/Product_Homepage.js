import React, { useState, useEffect } from 'react';
import './Product_Homepage.css';

const BlockLP = ({ block }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://twohandwarehouse-v1.onrender.com/api/get-item?id=${block.id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);
    
    return(
        <a href={`/2HandWarehouse/ViewProduct?id=itemID=${block.id}`} className="noUnderline">
            <div className="blockLP">
                <img className="imageLP"
                    loading="lazy"
                    srcSet={process.env.PUBLIC_URL + block.LPImagePath}
                />
                <div className="LPinfo">
                    <div className="LPname">{data && data.items && data.items.prodName}</div>
                    <div className="LPprice">{data && data.items && `$${data.items.prodAskPrice}`}</div>
                    <div className="LPaddress">{data && data.items && data.items.location.city}</div>
                    <div className="LPadd">Add to Cart</div>
                </div>
            </div>
        </a>
    );
};

export default BlockLP;