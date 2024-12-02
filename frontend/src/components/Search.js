import React, { useState } from "react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // Logic to handle the search functionality (filtering users)
  };

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={handleSearch}
      />
      <p>Search Query: {searchQuery}</p>
    </div>
  );
};

export default Search;
