import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getProducts } from "../services/productService";
import { useNavigate } from "react-router-dom";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const ProductCarousel = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); //initialize as empty array
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        const randomProducts = shuffleArray(data).slice(0, 7);
        setProducts(randomProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Prevent crash while loading
  if (products.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p>Loading products...</p>
      </section>
    );
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            {products[current].name}
          </h2>

          <p className="text-muted mb-6">{products[current].description}</p>

          <button
            className="px-6 py-3 bg-primary text-black rounded-lg font-medium"
            onClick={() => navigate(`/product/${products[current]._id}`)}
          >
            View Product
          </button>
        </div>

        <div className="relative">
          <img
            src={products[current].image}
            alt={products[current].name}
            className="w-full h-[400px] object-cover rounded-xl"
          />

          <div className="absolute inset-0 flex items-center justify-between px-6">
            <button onClick={prevSlide} className="carousel-btn">
              <FaChevronLeft size={14} />
            </button>

            <button onClick={nextSlide} className="carousel-btn">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
