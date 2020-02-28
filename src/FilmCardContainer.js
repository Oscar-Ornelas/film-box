import React, {useState, useEffect} from 'react';
import FilmCard from './FilmCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function FilmCardContainer(props) {
  let items = [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsive, setResponsive] = useState(
    {
      0: {items: 3},
      650: {items: 5},
      1024: { items: 8 }
    }
  );
  const [galleryItems, setGalleryItems] = useState([]);


  useEffect(()=> {
    setGalleryItems(props.filmList.map(film => {
      return (
        <FilmCard
          key={film.id}
          title={film.title}
          id={film.id}
          overview={film.overview}
          genres={film.genres}
          posterUrl={`https://image.tmdb.org/t/p/w154${film.poster_path}`}
        />
      )
    }));
  }, [props.filmList])

  const slideTo = (i) => setCurrentIndex(i);

  const onSlideChanged = (e) => setCurrentIndex(e.item);

  const slideNext = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);

  const slidePrev = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);

  const thumbItem = (item, i) => <span onClick={() => slideTo(i)}>* </span>

  return (
    <div className="film-card-container">
      <h2>{props.header}</h2>
      

      <div className="carousel">
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          responsive={responsive}
          slideToIndex={currentIndex}
          onSlideChanged={onSlideChanged}
        />

        <div className="carousel-btns">
          <button className="carousel-btn prev-btn" onClick={() => slidePrev()}><i class="fas fa-chevron-left"></i></button>
          <button className="carousel-btn next-btn" onClick={() => slideNext()}><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  )
}
export default FilmCardContainer;
