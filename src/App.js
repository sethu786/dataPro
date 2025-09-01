import React, { useState } from "react";
import "./App.css";

function App() {
  const [popup, setPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mainImg, setMainImg] = useState(
    "https://images.unsplash.com/photo-1582719471370-5c91a54a2b17?w=600"
  );

  const thumbnails = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    "https://images.unsplash.com/photo-1620912189865-bd4d24f1525c?w=600",
    "https://images.unsplash.com/photo-1601924638867-3ec9d643d3cc?w=600",
    "https://images.unsplash.com/photo-1514996937319-344454492b37?w=600",
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🍯 HoneyStore</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#product">Product</a>
          <a href="#related">Related</a>
          <a href="#benefits">Benefits</a>
          <a href="#cart">Cart</a>
        </div>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Product Section */}
      <section className="product" id="product">
        <div className="product-images">
          <img
            src={mainImg}
            alt="Main Product"
            className="main-img"
            onClick={() => setPopup(true)}
          />
          <div className="thumbs">
            {thumbnails.map((t, i) => (
              <img
                key={i}
                src={t}
                alt={`thumb-${i}`}
                onClick={() => setMainImg(t)}
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="product-details">
          <h1>Manuka Honey UMF™ 24+ MGO 1122+</h1>
          <p className="rating">⭐⭐⭐⭐⭐ (120 reviews)</p>

          <div className="options">
            <label>
              Size:
              <select>
                <option>250g</option>
                <option>500g</option>
              </select>
            </label>
            <label>
              Quantity:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>
          </div>

          <div className="price-row">
            <span className="price">$129.99</span>
            <button className="add-cart">Add to Cart</button>
          </div>

          <p className="delivery">🚚 Free delivery in India</p>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts />

      {/* Benefits */}
      <Benefits />

      {/* Popup */}
      {popup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setPopup(false)}>
              &times;
            </span>
            <img src={mainImg} alt="Popup" />
            <p>
              This premium Manuka Honey is certified UMF™ 24+ and MGO 1122+. It
              offers natural antibacterial properties, ideal for wellness and
              immunity.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function RelatedProducts() {
  const related = [
    {
      id: 1,
      title: "Manuka Honey UMF 10+ / MGO 263",
      img: "https://images.unsplash.com/photo-1514996937319-344454492b37?w=600",
      price: 39.99,
    },
    {
      id: 2,
      title: "Manuka Honey UMF 15+ / MGO 514",
      img: "https://images.unsplash.com/photo-1601924638867-3ec9d643d3cc?w=600",
      price: 59.99,
    },
    {
      id: 3,
      title: "Manuka Honey UMF 20+ / MGO 829",
      img: "https://images.unsplash.com/photo-1620912189865-bd4d24f1525c?w=600",
      price: 89.99,
    },
  ];

  return (
    <section className="related" id="related">
      <h2>You may also like</h2>
      <div className="related-grid">
        {related.map((p) => (
          <div key={p.id} className="related-card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: "🍯", text: "100% Pure Manuka Honey" },
    { icon: "✅", text: "UMF™ Certified Quality" },
    { icon: "🌿", text: "Supports Immunity & Wellness" },
    { icon: "🚚", text: "Free Delivery" },
  ];

  return (
    <section className="benefits" id="benefits">
      <h2>Why Choose Our Honey?</h2>
      <div className="benefits-grid">
        {items.map((b, i) => (
          <div key={i} className="benefit-card">
            <div className="benefit-icon">{b.icon}</div>
            <p>{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
