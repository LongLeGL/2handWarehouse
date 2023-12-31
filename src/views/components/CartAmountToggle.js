import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import './CartAmountToggle.css';

const CartAmountToggle = ({ amount, setDecrease, setIncrease, handleClick }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={
          async () => {
            await setDecrease();
            
          }
        }>
          <FontAwesomeIcon icon={faMinus} style={{ color: "#ff0000", }} />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={async () => {
          await setIncrease();
          
        }}>
          <FontAwesomeIcon icon={faPlus} style={{ color: "#ff0000", }} />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;