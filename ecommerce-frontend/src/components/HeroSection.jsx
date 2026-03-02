const HeroSection = () => {
  return (
    <section
      className="h-[90vh] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1771924310799-930349452c76?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Discover Premium Products
        </h1>

        <button className="px-6 py-3 bg-primary text-black font-medium rounded-lg hover:opacity-90 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
