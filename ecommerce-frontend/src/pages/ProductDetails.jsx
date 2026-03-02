import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";
import { useCart } from "../context/useCart";

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

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Product not found", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  // if (!product) {
  //   return <div className="text-center mt-20">Product Not Found</div>;
  // }

  const handleAddToCart = () => {
    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="mb-6">{product.description}</p>

          <p className="text-2xl font-semibold mb-4">₹{product.price}</p>

          <p className="mb-6">
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <button
            className="px-6 py-3 bg-primary text-black rounded-lg"
            onClick={handleAddToCart}
            disabled={added}
          >
            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
