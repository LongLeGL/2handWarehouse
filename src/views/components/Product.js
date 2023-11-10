import React from "react";
import { NavLink } from "react-router-dom";
import './ResultItem.css';
// import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, location } = curElem.curElem;
  console.log(image);
  return (
    <NavLink to={`/singleproduct/${id}`}>

      <div className="cardproduct">
        <div className="cardimage">
          <img className="cardrectangle" alt="Rectangle" src={image} />
        </div>
        <div className="cardtext">
          <div className="cardtext-wrapper">Add to Cart</div>
          <div className="cardoverlap-group">
            <div className="cardgroup">
              <p className="cardbucklo-wrop-wooden">Oppo A57 Ram 6/128G ĐEN</p>
              <div className="cardelement">2.550.000 đ</div>
            </div>
            <div className="carddiv" />
            <div className="cardframe" />
            <div className="cardframe-2" />
          </div>
          <div className="cardtext-wrapper-2">TP. Hồ Chí Minh</div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;