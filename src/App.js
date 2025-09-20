import React from "react";
import { menu } from "./menu";
import "./App.css";

const phoneNumber = "7993294071";   // primary call number
const secNumber = "9985788997";     // WhatsApp number

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src="./logo.png" alt="Crave-Corner" />
        <span className="location">Your Cravings - Our Corner</span>
      </header>

      {/* Category Bubbles Row */}
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

      {/* Items Display */}
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

                  {/* Buttons */}
                  <div className="item-actions">
  {/* Call Button */}
  <a href={`tel:${phoneNumber}`} className="order-btn">
    📞 Call
  </a>

  {/* WhatsApp Button */}
  <a
    href={`https://wa.me/91${secNumber}?text=Hi%20Crave%20Corner,%20I%20want%20to%20order%20${encodeURIComponent(item.name)} - ${encodeURIComponent(item.price)}/-`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
  >
    {/* WhatsApp Logo */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="whatsapp-icon"
      viewBox="0 0 32 32"
      fill="white"
    >
      <path d="M16 .5C7.5.5.5 7.6.5 16.1c0 2.8.7 5.6 2.1 8L.6 31.4l7.5-2c2.2 1.2 4.7 1.8 7.3 1.8 8.5 0 15.5-7.1 15.5-15.7C30.9 7.6 23.9.5 16 .5zm0 28.4c-2.4 0-4.8-.6-6.9-1.7l-.5-.3-4.4 1.2 1.2-4.3-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.2 5.9-13.1 13.1-13.1s13.1 5.9 13.1 13.1c0 7.3-5.9 13.1-13.1 13.1zm7.2-9.8c-.4-.2-2.4-1.2-2.7-1.3s-.6-.2-.9.2-1 1.3-1.3 1.6c-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.2-2.8s0-.6.2-.8c.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7s-.9-2.1-1.3-2.9c-.3-.7-.7-.6-.9-.6h-.8c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.2 1.4 3.7 1.6 4 .2.3.5.7c.3.4 2.8 4.2 6.9 5.9 1 0 1.8.3 2.4.5 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.6.2-1.8-.2-.3-.4-.4-.8-.6z" />
    </svg>
    WhatsApp
  </a>
</div>

                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer">
        <div>
          <span>Order Now</span>
          <span>Call At: {secNumber}</span>
          <span className="last">Best Deals for You and Your Gang Too..</span>
        </div>
        <div>
          <img src="./logo.png" alt="Crave-Corner" />
        </div>
      </div>
    </div>
  );
}

export default App;
