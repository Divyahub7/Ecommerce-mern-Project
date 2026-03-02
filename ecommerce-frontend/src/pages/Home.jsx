import HeroSection from "../components/HeroSection";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <div>
      <HeroSection />

      {/* Gap */}
      <div className="h-25"></div>

      <ProductCarousel />
    </div>
  );
};

export default Home;
