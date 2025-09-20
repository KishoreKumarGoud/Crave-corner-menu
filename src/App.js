import React from "react";
import { menu } from "./menu";
import "./App.css";

const phoneNumber = "7993294071";
const secNumber="9985788997"; // replace with your business number

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src="./logo.png" alt="Crave-Corner"></img>
<span className="location">Your Craving-Our Corner</span>
      </header>

      {/* Category Bubbles Row (No Filter) */}
      <div className="category-row">
        {menu.map((cat, i) => (
          <div key={i} className="category-bubble">
            <img
              src={cat.image}
              alt={cat.category}
              className="category-img"
            />
            <span>{cat.category}</span>
          </div>
        ))}
      </div>

      {/* Items Display in 2 Columns */}
      <div className="menu-list">
        {menu.map((cat, i) => (
          <div key={i} className="category-section">
            <h2>{cat.category}</h2>
            <div className="item-grid">
              {cat.items.map((item, j) => (
                <div key={j} className="item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-img"
                  />
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">₹{item.price}</span>
                  </div>
                  <a href={`tel:${phoneNumber}`} className="order-btn">
                    📞 Order Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* footer */}

      <div className="footer">
        <div><span>Order Now</span>
        <span>Call At: {secNumber}</span>
        <span className="last">Best Deals for You and Your Gang Too..</span></div>
        <div>
                  <img src="./logo.png" alt="Crave-Corner"></img>

        </div>
      </div>
    </div>
  );
}

export default App;
