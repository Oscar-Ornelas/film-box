import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import useDataCall from './useDataCall';

function ImageCarousel(props) {
  let items = [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsive, setResponsive] = useState(
    {
      0: {items: 1},
    }
  );
  const [galleryItems, setGalleryItems] = useState([]);
  const latest = useDataCall("now_playing");

  useEffect(() => {
    let count = 0;
    items = latest.map(item => {
      if(count < 3) {
        return (
          <Link to={`/detail/${props.type}/${item.id}`} className="link">
            <div className="image-carousel-item">
              <div className="inner-carousel" style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.73)),
                                                                        url(https://image.tmdb.org/t/p/w1280${item.backdrop_path})`}}>
                <h3 className="image-carousel-category">Latest</h3>
                <h2 className="image-carousel-title">{item.title}</h2>
                <p className="image-carousel-info">{item.genres[0].name} | {item.vote_average} Rating</p>
              </div>
            </div>
          </Link>
        )
      }
    })
    setGalleryItems(items);
  }, [latest])



  const slideTo = (i) => setCurrentIndex(i);

  const onSlideChanged = (e) => setCurrentIndex(e.item);

  return (
    <div className="image-carousel">
      <AliceCarousel
        items={galleryItems}
        responsive={responsive}
        swipeDisabled={true}
        dotsDisabled={true}
        buttonsDisabled={true}
        autoPlayInterval={5000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        playButtonEnabled={false}
        stopAutoPlayOnHover={false}
      />
    </div>
  )
}

export default ImageCarousel;
