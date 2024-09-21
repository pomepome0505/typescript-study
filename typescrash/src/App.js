import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList'
import './components/Search.css';

function App() {

  const [images, setImages] = React.useState([]);
  const [term, setTerm] = React.useState([]);
  const [page, setPage] = React.useState([]);
  const onSearchSubmit = async (term, page) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 21, page: page }
    });
    setImages(page === 1 ? response.data.results : images.concat(response.data.results));
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    setPage(1);
    onSearchSubmit(term, 1);
  }

  return (
    <div className="App">
      <Header>
        <form onSubmit={onFormSubmit}>
          <input 
            type="text"
            className="search"
            value={term}
            placeholder="検索"
            onChange={e => setTerm(e.target.value)}
          />
        </form>
        <Calculator />
        <div>
          <ImageList images={images} onSearchSubmit={onSearchSubmit} term={term} page={page} setPage={setPage} />
        </div>
      </Header>
    </div>
  )
}

export default App;