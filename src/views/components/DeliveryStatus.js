import "./DeliveryStatus.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Ava from "../../icons/maleava.jpg";
import Phone from "../../icons/phone.jpg";
import { AlertHeading } from "react-bootstrap";

function DeliveryStatus() {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
      const userId = sessionStorage.getItem('userId');
      const userRole = sessionStorage.getItem('userRole');
      console.log("UserID",userId);
      console.log("UserRole",userRole);
      if(userId && userRole) {
        setUserId(userId);
        setUserRole(userRole);
        console.log("UserID",userId);
        console.log("Userrole",userRole);
        if(userRole === 'shipper') {
          fetchOrders(userId);
        }
      }
    }, []);

  const fetchOrders = async (userId) => {
    const response = await fetch(
      `https://twohandwarehouse-v1.onrender.com/api/get-orders?id=all`
    );
    const data = await response.json();
    const filteredOrders = data.orders.filter(
      (order) =>
        (order.shipperId === userId || order.shipper === null) &&
        (order.status !== "waiting" && order.status !== "approved")
    );
    const orders = filteredOrders;
    setOrders(filteredOrders);
    console.log(orders);
  };
  const handlePickedup = async (orderId) => {
    console.log("Handling approval for order:", orderId);
    try {
      const data = {
        id: orderId,
        status: "delivering",
      };
      // Gọi API với method PUT
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
      alert("Order status updated !");
      window.location.reload();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const handleDelivered = async (orderId) => {
    console.log("Handling rejected for order:", orderId);
    try {
      const data = {
        id: orderId,
        status: "delivered",
      };
      // Gọi API với method PUT
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

      fetchOrders(userId);
      alert("Order status updated !");
      window.location.reload();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  return (
    <div class="DeliveryStatus">
      <div class="profile">
        <img
          src={Ava}
          style={{
            width: "200px",
            height: "200px",
            marginTop: "80px",
          }}
        />
        <div class="profile-data">Le Hoang Long</div>
        <div class="profile-data">0923423235</div>
        <div class="profile-data">lehoanglong@gmail.com</div>
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
          <div class="nav-2" style={{ color: "#FF5F00" }}>
            Delivering orders
          </div>
          <div class="nav-2">Waiting approval</div>
        </div>
        <div class="waiting-orders">
          {orders.map((order, orderIndex) => (
            <div key={orderIndex}>
              <div class="order">
                <div class="upper-half">
                  <div class="upper-left">
                    <img
                      src={Phone}
                      style={{
                        height: "120px",
                        marginTop: "8px",
                        marginLeft: "8px",
                      }}
                    />
                    <div class="product-data">
                      <div class="product-name">{order.product.prodName}</div>
                      <div class="quantity">x{order.purQuantity}</div>
                      <div class="delivering-status">
                        From: {order.product.location.address},{" "}
                        {order.product.location.city},
                        {order.product.location.province},{" "}
                        {order.product.location.country}
                      </div>
                      <div class="delivering-status">
                        To:
                        {order.receivingPlace.address &&
                          ` ${order.receivingPlace.address}, `}
                        {order.receivingPlace.city &&
                          `${order.receivingPlace.city}, `}
                        {order.receivingPlace.province &&
                          `${order.receivingPlace.province}, `}
                        {order.receivingPlace.country &&
                          `${order.receivingPlace.country}`}
                      </div>
                    </div>
                  </div>
                  <div class="upper-right">
                    <div class="upper-right-half">
                      <div class="time">14-2-2023 09:59</div>
                      <div class="status">{order.status}</div>
                    </div>
                    <div class="upper-right-half">
                      <div
                        class="asking"
                        style={{ marginTop: "50px", color: "#F0F0F0" }}
                      >
                        Proposed price:
                      </div>
                      <div class="price" style={{ marginTop: "50px" }}>
                        đ {order.userProposedPrice * 1000}
                      </div>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    background: "#5F5F5F",
                    height: "0.5px",
                  }}
                />
                <div class="lower-half">
                  <div class="upper-left"></div>
                  <div class="lower-right">
                    <div class="lower-right-half">
                      <div class="shipping" style={{ marginTop: "50px" }}>
                        Shipping cost:{" "}
                      </div>
                      <div class="cost" style={{ marginTop: "50px" }}>
                        {" "}
                        đ {order.purShippingFee * 1000}
                      </div>
                    </div>
                    <div class="lower-right-half">
                      <div class="shipping" style={{ marginTop: "50px" }}>
                        Order total:{" "}
                      </div>
                      <div class="cost" style={{ marginTop: "50px" }}>
                        {" "}
                        đ{" "}
                        {order.purShippingFee * 1000 +
                          order.userProposedPrice * 1000}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lower-half3">
                <button
                  class="btn1"
                  onClick={() => handlePickedup(order.id)}
                  disabled={order.status === "delivering"}
                >
                  Picked up
                </button>
                <button class="btn1" onClick={() => handleDelivered(order.id)}>
                  Delivered
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeliveryStatus;
