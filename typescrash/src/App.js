import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Calculator from './components/Calculator';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList'

function App() {

  const [images, setImages] = React.useState([]);
  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    setImages(response.data.results);
  }
  return (
    <div className="App">
      <Header>
        <Search onSearchSubmit={onSearchSubmit} />
        <Calculator />
        <div>
          <ImageList images={images} />
        </div>
      </Header>
    </div>
  )
}

export default App;