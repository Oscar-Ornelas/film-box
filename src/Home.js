import React, {useState, useEffect} from 'react';
import useDataCall from './useDataCall';
import {SemipolarLoading} from 'react-loadingg';
import ImageCarousel from './ImageCarousel';
import FilmCardContainer from './FilmCardContainer';

function Home() {
  const popular = useDataCall("popular");
  const upcoming = useDataCall("upcoming");
  const nowPlaying = useDataCall("now_playing");
  const topRated = useDataCall("top_rated");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <main>

      <div className={`loading-icon ${isLoading ? "visible" : "hidden"}`}>
        <SemipolarLoading/>
      </div>

      <div className={isLoading ? "hidden" : "visible"}>
        <ImageCarousel/>
        <div className="home">
          <FilmCardContainer header="Popular" filmList={popular}/>
          <div><hr/></div>
          <FilmCardContainer header="Upcoming" filmList={upcoming}/>
          <div><hr/></div>
          <FilmCardContainer header="Now Playing" filmList={nowPlaying}/>
          <div><hr/></div>
          <FilmCardContainer header="Top Rated" filmList={topRated}/>
        </div>
      </div>

    </main>
  )



}

export default Home;
