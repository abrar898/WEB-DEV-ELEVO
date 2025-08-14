const CategoryFilter = ({ selected, setSelected }) => {
  const categories = ["All", "Tech", "Travel", "Food"];

  return (
    <div className="flex gap-4 flex-wrap mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded ${selected === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
