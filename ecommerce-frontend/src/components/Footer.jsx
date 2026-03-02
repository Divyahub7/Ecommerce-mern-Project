const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">LUXE</h2>
          <p className="text-muted text-sm">
            Premium products crafted with elegance and simplicity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-foreground font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-muted text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-foreground font-medium mb-4">Contact</h3>
          <p className="text-muted text-sm">support@luxe.com</p>
          <p className="text-muted text-sm">+1 234 567 890</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border text-center py-4 text-muted text-sm">
        © {new Date().getFullYear()} LUXE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
