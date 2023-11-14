import React from 'react';
import './Product_Homepage.css';

const BlockLP = ({ block }) => (
    <div className="blockLP">
        <img className="imageLP"
            loading="lazy"
            srcSet={process.env.PUBLIC_URL + block.LPImagePath}
        />
        <div className="LPinfo">
            <div className="LPname">{block.LPname}</div>
            <div className="LPprice">{block.LPprice}</div>
            <div className="LPaddress">{block.LPaddress}</div>
            <div className="LPadd">Add to Cart</div>
        </div>
    </div>
);

export default BlockLP;