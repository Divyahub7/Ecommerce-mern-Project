import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };
  return (
    <Link to={`/product/${product._id}`}>
      <div
        className="bg-card border border-border rounded-xl overflow-hidden 
                    hover:scale-[1.02] transition duration-300"
      >
        {/* Product Image */}
        <div className="h-60 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {product.name}
          </h3>

          <p className="text-muted text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-primary font-semibold text-lg">
              ₹{product.price}
            </span>

            <button
              className="px-4 py-2 bg-primary text-black rounded-lg text-sm font-medium hover:opacity-90 transition"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              disabled={added}
            >
              {added ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
