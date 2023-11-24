import React from "react";
import { NavLink } from "react-router-dom";
import './ResultItem.css';
// import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, item, image } = curElem.curElem;
  // console.log(image);
  return (
    <NavLink to={`/2HandWarehouse/ViewProduct/${id}`}>

      <div className="cardproduct">
        <div className="cardimage">
          <img className="cardrectangle" alt="Rectangle" src={image} />
        </div>
        <div className="cardtext">
          <div className="cardtext-wrapper">Add to Cart</div>
          <div className="cardoverlap-group">
            <div className="cardgroup">
              <p className="cardbucklo-wrop-wooden">{item.prodName}</p>
              <div className="cardelement">{item.prodAskPrice} USD</div>
            </div>
            <div className="carddiv" />
            <div className="cardframe" />
            <div className="cardframe-2" />
          </div>
          <div className="cardtext-wrapper-2">{item.location.city}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;