import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(query);
    setQuery(''); 
  };

  return (
    <>
      <header>
      <Toaster />
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            className={css.formInput}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    
    </>
  );
};
