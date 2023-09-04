import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Search({setFilteredList , moviesList}) {


  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
if (searchQuery.length > 1) {
  const filteredMovies = moviesList.filter((movie) =>
  movie.name.toLowerCase().includes(searchQuery.toLowerCase())
);

setFilteredList(filteredMovies);  
}

  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        onChange={handleSearchChange}
      />
    </section>
  )
}

export default Search
