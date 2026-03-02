import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          LUXE
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6 text-foreground">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          {user && <Link to="/cart">Cart</Link>}

          {/* Auth Based Rendering */}
          {!user ? (
            <Link to="/login" className="hover:text-primary">
              Login
            </Link>
          ) : (
            <>
              <Link to="/profile" className="hover:text-primary">
                Profile
              </Link>

              <button onClick={handleLogout} className="hover:text-primary">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
