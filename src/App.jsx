import React, { useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [results, setResults] = useState([]);

  const dataList = [
    { id: 1, title: "React Basics", category: "React" },
    { id: 2, title: "Understanding Tailwind CSS", category: "CSS" },
    { id: 3, title: "Advanced React Patterns", category: "React" },
    { id: 4, title: "Introduction to Vite", category: "Tooling" },
    { id: 5, title: "Tailwind Responsive Design", category: "CSS" },
  ];

  const handleSearch = () => {
    const filtered = dataList.filter((item) => {
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "all" || item.category === filter;
      return matchesQuery && matchesFilter;
    });
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Search Blog</h1>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search blogs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="w-full sm:w-auto border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="Tooling">Tooling</option>
          </select>
          <button
            onClick={handleSearch}
            className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Results:</h2>
          <ul className="mt-4 space-y-2">
            {results.length > 0 ? (
              results.map((result) => (
                <li
                  key={result.id}
                  className="p-4 border border-gray-200 rounded-md bg-gray-50 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-gray-800">
                    {result.title}
                  </h3>
                  <p className="text-gray-500">{result.category}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;

