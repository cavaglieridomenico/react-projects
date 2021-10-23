import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const refInput = React.useRef('');
  React.useEffect(() => {
    refInput.current.focus();
  }, []);
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={refInput}
            onChange={event => setSearchTerm(event.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
