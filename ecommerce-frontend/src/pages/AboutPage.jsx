import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background text-foreground min-h-[calc(100vh-64px)] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Store
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Redefining online shopping with elegance, quality, and trust. We
            bring premium products straight to your doorstep.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Our Mission
            </h2>
            <p className="text-muted">
              To deliver a seamless and luxurious shopping experience where
              customers can explore curated collections with confidence,
              security, and convenience.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Why Choose Us
            </h2>
            <ul className="space-y-3 text-muted">
              <li>Premium Quality Products</li>
              <li>Secure & Safe Checkout</li>
              <li>Fast & Reliable Delivery</li>
              <li>Hassle-Free Returns</li>
              <li>Dedicated Customer Support</li>
            </ul>
          </div>
        </div>

        {/* Brand Promise Section */}
        <div className="bg-card border border-border rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Commitment to You</h2>
          <p className="text-muted max-w-3xl mx-auto mb-8">
            Every product in our store is carefully selected to meet the highest
            standards of quality and design. We believe shopping should feel
            effortless, secure, and satisfying.
          </p>

          <button
            onClick={() => navigate("/products")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
          >
            Experience Premium Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
