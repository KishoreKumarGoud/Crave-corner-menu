import React from "react";
import { menu } from "./menu";
import "./App.css";

const phoneNumber = "9985788997";
const secNumber="7993294071"; // replace with your business number

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
        <h1>Order Now</h1>
        <h1>Call at: {secNumber}</h1>
        <h2>Best Deals for You and Your Gang Too..</h2>
      </div>
    </div>
  );
}

export default App;
