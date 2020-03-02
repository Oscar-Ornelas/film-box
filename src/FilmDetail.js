import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {SemipolarLoading} from 'react-loadingg';
import AliceCarousel from 'react-alice-carousel';
import FilmCard from './FilmCard';
import FilmCardContainer from './FilmCardContainer';
import Review from './Review';

function FilmDetail() {
  const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  const [film, setFilm] = useState({});
  const [cast, setCast] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const {filmID} = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  let items = [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsive, setResponsive] = useState(
    {
      0: {items: 2},
      450: {items: 3},
      650: {items: 4},
      900: {items: 6},
      1200: { items: 7 }
    }
  );
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${filmID}/credits?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      for(let i = 0; i < 10; i++) {
        setCast(prevCast => [...prevCast, data.cast[i]]);
      }
    })
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmID}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.json())
    .then(data => setFilm(data))
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmID}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      for(let i = 0; i < 4; i++) {
        if(data.results[i] !== undefined) {
          setReviewData(prevReviewData => [...prevReviewData, data.results[i]])
        }
      }
    })
  }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmID}/similar?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(film => (
        fetch(`https://api.themoviedb.org/3/movie/${film.id}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(data => setSimilarMovies(prevSimilarMovies => [...prevSimilarMovies, data]))
      ))
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    items = cast.map(person => (
      <div className="film-detail-cast-item">
        <p className="film-detail-cast-name">{person.name}</p>
        <img className="film-detail-cast-img" src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}/>
      </div>
    ))
    setGalleryItems(items);
  }, [cast])

  const onSlideChanged = (e) => setCurrentIndex(e.item);

  const slideNext = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);

  const slidePrev = () => setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);

  const reviews = reviewData.map(review => (
      <Review
        reviewer={review.author}
        content={review.content}
        fullReviewSrc={review.url}
      />
  ))

  return (
    <main>
      <div className={`loading-icon ${isLoading ? "visible" : "hidden"}`}>
        <SemipolarLoading/>
      </div>

      <div className={`film-detail ${isLoading ? "hidden" : "visible"}`}>
        <div className="film-detail-img"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.73)), url(https://image.tmdb.org/t/p/w1280${film.backdrop_path})`}}>
          <p className="film-detail-back" onClick={() => history.push(`/film-box`)}><i className="fas fa-chevron-left"></i></p>
          <div className="film-detail-card">
            <div className="film-detail-card-info">
              <h2 className="film-detail-title">{film.title}</h2>
              <p className="film-detail-rating">{film.vote_average} Rating</p>
              <p>{film.status}</p>
            </div>
            <img className="film-detail-poster" src={`https://image.tmdb.org/t/p/w154${film.poster_path}`}/>
          </div>
        </div>

        <div className="main-content container">
          <section className="overview">
            <h2 className="detail-header">Overview</h2>
            <p>{film.overview}</p>
          </section>

          <section className="cast">
            <h2 className="detail-header">Cast</h2>

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
              <button className="carousel-btn prev-btn cast-btn" onClick={() => slidePrev()}><i className="fas fa-chevron-left"></i></button>
              <button className="carousel-btn next-btn cast-btn" onClick={() => slideNext()}><i className="fas fa-chevron-right"></i></button>
            </div>

          </section>

          <section>
            <h2 className="detail-header">Popular Reviews</h2>
            {reviewData.length > 0 ? reviews : <Review
              reviewer="No Reviews Yet!"
              content=""
              fullReviewSrc=""
            />}
          </section>

          <section>
            <FilmCardContainer header="Similar Movies" filmList={similarMovies}/>
          </section>

        </div>


      </div>
    </main>

  )

}

export default FilmDetail;
