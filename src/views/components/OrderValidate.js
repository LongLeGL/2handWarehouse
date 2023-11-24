import "./OrderValidate.css";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Ava from "../../icons/maleava.jpg";
import Phone from "../../icons/phone.jpg";
function OrderValidate() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

    // Hardcode userId
    const userId = 1;

  // const [userId, setUserId] = useState(null);
  // useEffect(() => {
  //     const id = sessionStorage.getItem('userId');
  //     const role = sessionStorage.getItem('userRole');
  //     if(id && role) {
  //       setUserId(id);
  //       setUserRole(role);
  //       if(role !== 'shipper') {
  //         fetchOrders(id);
  //       }
  //     }
  //   }, []);
  useEffect(() => {
    fetchOrders(userId);
  }, []);

  const fetchOrders = async (userId) => {
    const response = await fetch(
      `https://twohandwarehouse-v1.onrender.com/api/get-buy-orders?id=${userId}`
    );
    const data = await response.json();
    const orders = data.seller.products[0].orders;
    setOrders(data.seller.products[0].orders);
    const username = data.seller.username;
    setUsername(username); // Set the username in the state
    const phoneNumber = data.seller.phoneNumber;
    setPhoneNumber(data.seller.phoneNumber); // Replace 'phoneNumber' with the actual key from your data
    const email = data.seller.email;
    setEmail(data.seller.email); // Replace 'email' with the actual key from your data
    const products = data.seller.products;
    setProducts(data.seller.products);
  };
  const handleCheckoutClick = (orderId) => {
    window.location.href = `/2HandWarehouse/Checkout?id=${orderId}`;
  };

  const handleApproveOrder = async (orderId) => {
    console.log("Handling approval for order:", orderId);
    try {
      const data = {
        id: orderId,
        status: "approved",
      };
      const response = await fetch(
        `https://twohandwarehouse-v1.onrender.com/api/update-order`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Refresh dữ liệu đơn hàng sau khi đã approve
      fetchOrders(userId);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const handleRejectedOrder = async (orderId) => {
    console.log("Handling rejected for order:", orderId);
    try {
      const data = {
        id: orderId,
        status: "rejected",
      };
      const response = await fetch(
        `https://twohandwarehouse-v1.onrender.com/api/update-order`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Refresh
      fetchOrders(userId);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <div class="OrderValidate">
      <div class="profile">
        <img
          src={Ava}
          style={{
            width: "200px",
            height: "200px",
            marginTop: "80px",
          }}
        />
        <div class="profile-data">{username}</div>
        <div class="profile-data">{phoneNumber}</div>
        <div class="profile-data">{email}</div>
      </div>
      <div class="Content">
        <div class="nav-bar-1">
          <div class="nav-1">Selling posts</div>
          <div class="nav-1">Buy History</div>
          <div class="nav-1">Sold History</div>
          <div class="nav-1" style={{ color: "#FF5F00" }}>
            Delivering
          </div>
        </div>
        <div class="nav-bar-2">
          <div class="nav-2">Delivering orders</div>
          <div class="nav-2" style={{ color: "#FF5F00" }}>
            Waiting approval
          </div>
        </div>
        {products.map((product, productIndex) => (
          <div key={productIndex}>
            {/* Render other product details as needed */}
            <div>
              {product.orders.map((order, orderIndex) => (
                <div className="orders" key={orderIndex}>
                  {/* Render order details based on the structure of your orders data */}
                  <div className="upper-half">
                    <div class="upper-left">
                      <img
                        src={Phone}
                        style={{
                          height: "120px",
                          marginTop: "8px",
                          marginLeft: "8px",
                        }}
                      />
                      <div class="product-name"> {product.prodName}</div>
                    </div>
                    <div class="upper-right">
                      <div class="upper-right-half">
                        <div class="time">{order.updatedAt}</div>
                        <div class="status">{order.status}</div>
                      </div>
                      <div class="upper-right-half">
                        <div class="asking">Asking price:</div>
                        <div class="price">đ {product.prodAskPrice * 1000}</div>
                      </div>
                      <div class="upper-right-half">
                        <div class="asking" style={{ marginTop: "0px" }}>
                          Proposed price:
                        </div>
                        <div class="price" style={{ marginTop: "0px" }}>
                          đ {order.userProposedPrice * 1000}
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                  <hr
                    style={{
                      background: "#D5D5D5",
                      height: "0.5px",
                    }}
                  />
                  {/* ... Render lower-half details based on order data */}
                  {order.status === "waiting" ? (
                    <div className="lower-half">
                      <button
                        class="btn"
                        style={{
                          color: "#00FF47",
                          backgroundColor: "white",
                          border: "1px solid black",
                          width: "25%",
                          borderRadius: "0px",
                          marginTop: "100px",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                        onClick={() => handleApproveOrder(order.id)}
                      >
                        Approve
                      </button>
                      <button
                        class="btn"
                        style={{
                          color: "#F00",
                          backgroundColor: "white",
                          border: "1px solid black",
                          width: "25%",
                          borderRadius: "0px",
                          marginTop: "100px",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                        onClick={() => handleRejectedOrder(order.id)}
                      >
                        Reject
                      </button>
                      <button
                        class="btn"
                        style={{
                          color: "black",
                          backgroundColor: "white",
                          border: "1px solid black",
                          width: "25%",
                          borderRadius: "0px",
                          marginTop: "100px",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        Contact Buyer
                      </button>
                    </div>
                  ) : (
                    <div>
                      {order.status === "approved" ? (
                        <div className="lower-half2">
                          <button
                            class="btn"
                            style={{
                              color: "black",
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "25%",
                              borderRadius: "0px",
                              marginTop: "100px",
                              fontWeight: "bold",
                              fontSize: "18px",
                            }}
                            onClick={() => handleCheckoutClick(order.id)}
                          >
                            Checkout
                          </button>
                        </div>
                      ) : (
                        <div className="lower-half2">
                          <button
                            class="btn"
                            style={{
                              color: "black",
                              backgroundColor: "white",
                              border: "1px solid black",
                              width: "25%",
                              borderRadius: "0px",
                              marginTop: "100px",
                              fontWeight: "bold",
                              fontSize: "18px",
                            }}
                          >
                            Contact Seller
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderValidate;
