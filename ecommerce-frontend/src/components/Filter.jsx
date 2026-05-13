import React from "react";

const categories = ["men", "women", "shoes", "electronics"];

function Filter({ categories, selectedCategories, setSelectedCategories }) {
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  };
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4 text-primary ">Categories</h2>

      <div className="flex gap-6 overflow-x-auto">
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filter;
