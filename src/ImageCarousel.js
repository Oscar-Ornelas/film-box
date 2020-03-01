import React, {useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import useDataCall from './useDataCall';

function ImageCarousel() {
  let items = [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsive, setResponsive] = useState(
    {
      0: {items: 1},
    }
  );
  const [galleryItems, setGalleryItems] = useState([]);
  const popular = useDataCall("popular");

  useEffect(() => {
    let count = 0;
    items = popular.map(item => {
      if(count < 3) {
        return (
          <div className="image-carousel-item">
            <img className="image-carousel-image" src={`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`}/>
            <div className="image-carousel-details">
              <h3 className="image-carousel-category">Popular</h3>
              <h2 className="image-carousel-title">{item.title}</h2>
              <p className="image-carousel-info">{item.genres[0].name} | {item.vote_average} Rating</p>
            </div>
          </div>
        )
      }
    })
    setGalleryItems(items);
  }, [popular])



  const slideTo = (i) => setCurrentIndex(i);

  const onSlideChanged = (e) => setCurrentIndex(e.item);

  return (
    <div className="image-carousel">
      <AliceCarousel
        items={galleryItems}
        responsive={responsive}
        dotsDisabled={true}
        buttonsDisabled={true}
        autoPlayInterval={4000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        playButtonEnabled={false}
        disableAutoPlayOnAction={true}
      />
    </div>
  )
}

export default ImageCarousel;
