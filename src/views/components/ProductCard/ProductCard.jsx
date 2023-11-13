import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, productItem }) => {
  const router = useNavigate();
  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3>{productItem.productName}</h3>
        <h4>${productItem.price}</h4>
        <h5>{productItem.location}</h5>
        <div className="price">
          <button type="submit">
            <div name="add">Add to cart</div>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
