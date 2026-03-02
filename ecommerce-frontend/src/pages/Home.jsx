import HeroSection from "../components/HeroSection";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <div>
      <HeroSection />

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Featured Products
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Discover our handpicked premium collection designed to elevate your
          everyday lifestyle.
        </p>
      </section>

      <ProductCarousel />
    </div>
  );
};

export default Home;
