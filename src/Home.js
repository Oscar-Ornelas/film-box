import React from 'react';
import useDataCall from './useDataCall';
import FilmCardContainer from './FilmCardContainer';

function Home() {
  const popular = useDataCall("popular");
  const upcoming = useDataCall("upcoming");
  const nowPlaying = useDataCall("now_playing");
  const topRated = useDataCall("top_rated");

  return (
    <div>
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
  )
}

export default Home;
