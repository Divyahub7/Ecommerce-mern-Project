import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

// const dummyProducts = [
//   {
//     _id: "1",
//     name: "Premium Headphones",
//     description: "Immersive sound experience.",
//     price: 4999,
//     image:
//       "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlbWl1bSUyMGhlYWRwaG9uZXN8ZW58MHwwfDB8fHww",
//   },
//   {
//     _id: "2",
//     name: "Luxury Watch",
//     description: "Timeless design crafted to perfection.",
//     price: 8999,
//     image:
//       "https://media.istockphoto.com/id/1273296405/photo/beautiful-fashion-watch-with-leather-strap-in-the-shop-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=_JzvyNe21ohccoqyneZm1wqUFAKEh34da74Wg2Spf2s=",
//   },
// ];

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  );
}

export default Products;
