import React from 'react';
import Search from './Country';
import Global from './Global';
import Header from './Header';
import Footer from './Footer';

function App() {
  let [showCountry, setShowCountry] = React.useState(false);
  let [searchTerm, setSearchTerm] = React.useState('');
  let [inputValue, setInputValue] = React.useState('');

  const handleCountry = () => {
    setShowCountry(!showCountry);
    setSearchTerm(searchTerm);
    setInputValue("");
  };

  const today = new Date();
  const date =
    today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  return (
    <div className='App'>
      <div>
      <Header />
      </div>
      <div className='main'>
        {!showCountry || !searchTerm? (
          <Global date={date} />
        ) : (
          <Search link={searchTerm.toLowerCase()} date={date} />
        )}
        <div className='field'>
          <div className='control'>
            <input
              onChange={(event) => setSearchTerm(event.target.value)}
              className='input is-primary'
              type='text'
              placeholder='Search country...'
            />
            <button
              className='button is-primary grow'
              id='search'
              onClick={handleCountry}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
