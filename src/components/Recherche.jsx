import React, { useState } from 'react';

const Recherche = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Rechercher des amis ou des chaînes..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Recherche;
