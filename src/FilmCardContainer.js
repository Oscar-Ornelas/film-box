import React, {useState, useEffect} from 'react';
import FilmCard from './FilmCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ScrollAnimation from 'react-animate-on-scroll';

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
  const [animate, setAnimate] = useState(false);


  useEffect(()=> {
    setGalleryItems(props.filmList.map(film => {
      return (
        <FilmCard
          key={film.id}
          title={film.title}
          id={film.id}
          genres={film.genres}
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
    <ScrollAnimation
    animateIn="fadeIn"
    animateOnce={true}
    animatePreScroll={false}
    offSet="50"
    duration={2}
    afterAnimatedIn={(v) => (
      setAnimate(true)
    )}
    >
      <div className="film-card-container">
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
      </div>
    </ScrollAnimation>
  )
}
export default FilmCardContainer;
