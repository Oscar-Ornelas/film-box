import React, {useState, useEffect} from 'react';
import FilmCard from './FilmCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function FilmCardContainer(props) {
  let items = [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsive, setResponsive] = useState(
    {
      0: {items: 2},
      495: {items: 3},
      700: {items: 4},
      1000: {items: 5},
      1200: { items: 6 },
      1500: {items: 8},
      1600: {items: 9},
      1800: {items: 10}
    }
  );
  const [galleryItems, setGalleryItems] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(()=> {
    setGalleryItems(props.filmList.map(film => {
      setGenres(prevGenres => (
        film.genres.map(genre => genre.name)
      ));
      return (
        <FilmCard
          key={film.id}
          title={film.title}
          id={film.id}
          genres={genres}
          rating={film.vote_average}
          posterUrl={`https://image.tmdb.org/t/p/w185${film.poster_path}`}
        />
      )
    }));
  }, [props.filmList])

  const slideTo = (i) => setCurrentIndex(i);

  const onSlideChanged = (e) => setCurrentIndex(e.item);

  const slideNext = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);

  const slidePrev = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);

  return (
      <section className="film-card-container">
        <h2 className="carousel-header">{props.header}</h2>

        <div className="carousel-inner">
          <AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            items={galleryItems}
            responsive={responsive}
            slideToIndex={currentIndex}
            onSlideChanged={onSlideChanged}
            swipeDisabled={true}
          />
        </div>

        <div className="carousel-btns">
          <button className="carousel-btn prev-btn" onClick={() => slidePrev()}><i className="fas fa-chevron-left"></i></button>
          <button className="carousel-btn next-btn" onClick={() => slideNext()}><i className="fas fa-chevron-right"></i></button>
        </div>
      </section>

  )
}
export default FilmCardContainer;
