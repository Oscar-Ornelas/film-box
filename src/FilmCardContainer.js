import React, {useState, useEffect} from 'react';
import FilmCard from './FilmCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function FilmCardContainer(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsive, setResponsive] = useState(
    {
      0: {items: 3},
      650: {items: 5},
      1024: { items: 8 }
    }
  );
  const [galleryItems, setGalleryItems] = useState([]);
  let items = [];

  useEffect(()=> {
    const items = props.filmList.map(film => {
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
    });
    setGalleryItems(items);
  }, [props.filmList])

  const slideTo = (i) => setCurrentIndex(i);

  const onSlideChanged = (e) => setCurrentIndex(e.item);

  const slideNext = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);

  const slidePrev = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);

  const thumbItem = (item, i) => <span onClick={() => slideTo(i)}>* </span>

  return (
    <div>
      <AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={false}
        items={galleryItems}
        responsive={responsive}
        slideToIndex={currentIndex}
        onSlideChanged={onSlideChanged}
      />

      <ul>{items.map(thumbItem)}</ul>
      <button onClick={() => slidePrev()}>Prev button</button>
      <button onClick={() => slideNext()}>Next button</button>
    </div>
  )
}
export default FilmCardContainer;
