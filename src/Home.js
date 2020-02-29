import React, {useState, useEffect} from 'react';
import useDataCall from './useDataCall';
import {SemipolarLoading} from 'react-loadingg';
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
    <div>
      <div className={`loading-icon ${isLoading ? "visible" : "hidden"}`}>
        <SemipolarLoading/>
      </div>
      <div className={isLoading ? "hidden" : "visible"}>
        <img src="https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"/>
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
    </div>
  )



}

export default Home;
