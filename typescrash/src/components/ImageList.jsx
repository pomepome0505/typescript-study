import React from 'react'
import ImageCard from './ImageCard';
import './ImageList.css'

const ImageList = (props) => {
  const handleScroll = (e) => {
    const element = e.target;
    const { scrollHeight, scrollTop, clientHeight } = element
    if (scrollHeight - scrollTop === clientHeight) {
      console.log('reach end');
      const newPage = props.page + 1;
      props.setPage(newPage);
      props.onSearchSubmit(props.term, newPage);
    }
  }

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
   })
  return (
    <div
      onScroll={handleScroll}
      style={{height: '1000px', overflow: 'scroll' }}
      className="image-list"
    >
      {images}
    </div>
  );
}

export default ImageList;