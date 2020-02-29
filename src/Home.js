import React from 'react';
import useDataCall from './useDataCall';
import FilmCardContainer from './FilmCardContainer';

function Home() {
  const popular = useDataCall("popular");
  const upcoming = useDataCall("upcoming");
  const nowPlaying = useDataCall("now_playing");
  const topRated = useDataCall("top_rated");

  return (
    <div className="home">
      <FilmCardContainer header="Popular" filmList={popular}/>
      <FilmCardContainer header="Upcoming" filmList={upcoming}/>
      <FilmCardContainer header="Now Playing" filmList={nowPlaying}/>
      <FilmCardContainer header="Top Rated" filmList={topRated}/>
    </div>
  )
}

export default Home;
