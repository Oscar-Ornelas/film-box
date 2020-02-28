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
      <FilmCardContainer filmList={popular}/>
      <FilmCardContainer filmList={upcoming}/>
      <FilmCardContainer filmList={nowPlaying}/>
      <FilmCardContainer filmList={topRated}/>
    </div>
  )
}

export default Home;
