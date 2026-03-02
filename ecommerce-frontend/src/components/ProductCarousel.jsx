import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Premium Headphones",
    description: "Experience immersive sound with luxury design.",
    image:
      "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlbWl1bSUyMGhlYWRwaG9uZXN8ZW58MHwwfDB8fHww",
  },
  {
    id: 2,
    title: "Luxury Watch",
    description: "Timeless elegance crafted for perfection.",
    image:
      "https://media.istockphoto.com/id/1273296405/photo/beautiful-fashion-watch-with-leather-strap-in-the-shop-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=_JzvyNe21ohccoqyneZm1wqUFAKEh34da74Wg2Spf2s=",
  },
  {
    id: 3,
    title: "Modern Sneakers",
    description: "Comfort meets premium street style.",
    image:
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHwwfDB8fHww",
  },
];

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - Text */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            {products[current].title}
          </h2>

          <p className="text-muted mb-6">{products[current].description}</p>

          <button className="px-6 py-3 bg-primary text-black rounded-lg font-medium">
            View Product
          </button>
        </div>

        {/* RIGHT SIDE - Carousel */}
        <div className="relative">
          <img
            src={products[current].image}
            alt={products[current].title}
            className="w-full h-[400px] object-cover rounded-xl"
          />

          {/* Buttons */}
          <div className="absolute inset-0 flex items-center justify-between px-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center 
               rounded-full 
               bg-white/10 backdrop-blur-md 
               text-foreground 
               hover:bg-white/20 
               transition"
            >
              <FaChevronLeft size={14} />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center 
               rounded-full 
               bg-white/10 backdrop-blur-md 
               text-foreground 
               hover:bg-white/20 
               transition"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
