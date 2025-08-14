import TaskFlowPage from "./pages/Taskflow"
import TaskFlowLandingPage from "./pages/Taskflow-landing"
import React, { useState } from "react";
import { posts } from "./data";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import CategoryFilter from "./components/CategoryFilter";

const POSTS_PER_PAGE = 3;

function App() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = posts.filter((post) => {
    const matchCategory = category === "All" || post.category === category;
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto p-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <CategoryFilter selected={category} setSelected={setCategory} />
        <div className="grid md:grid-cols-3 gap-6">
          {paginated.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-6">
          {Array.from({ length: Math.ceil(filtered.length / POSTS_PER_PAGE) }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 border rounded ${page === i + 1 ? "bg-blue-600 text-white" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

