import React, {useState, useEffect} from 'react';
import usefilmListCall from './useFilmListCall';
import {SemipolarLoading} from 'react-loadingg';
import ImageCarousel from './ImageCarousel';
import FilmCardContainer from './FilmCardContainer';
import Footer from './Footer';

function Home() {
  const popular = usefilmListCall("popular");
  const upcoming = usefilmListCall("upcoming");
  const nowPlaying = usefilmListCall("now_playing");
  const topRated = usefilmListCall("top_rated");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      <main className="home">

        <div className={`loading-icon ${isLoading ? "visible" : "hidden"}`}>
          <SemipolarLoading/>
        </div>

        <div className={`main-content ${isLoading ? "hidden" : "visible"}`}>
          <ImageCarousel type="movie"/>
          <div className="container">
            <FilmCardContainer header="Now Playing" filmList={nowPlaying}/>
            <div><hr/></div>
            <FilmCardContainer header="Popular" filmList={popular}/>
            <div><hr/></div>
            <FilmCardContainer header="Upcoming" filmList={upcoming}/>
            <div><hr/></div>
            <FilmCardContainer header="Top Rated" filmList={topRated}/>
          </div>
          <Footer/>
        </div>

      </main>

    </>
  )



}

export default Home;
