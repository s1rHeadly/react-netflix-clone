import React from 'react';
import useFetch from '../hooks/useFetch';
import { POSTER_URL } from '../utils/helpers';

import Error from './Error';
import '../css/row.scss';

const Row = ({title, endPoint}) => {

  //import useFetch hook
  const {movies, loading, error} = useFetch(endPoint);

  console.log(movies, loading, error)

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">

        {loading && <div>Loading...</div>}
        
        {!loading && error && <Error message={error}/>}

        {!error && !loading && (movies?.map((item) =>
          <img className="row__poster"
          key={item.id}
          src={`${POSTER_URL}${item?.poster_path}`}
          alt={item?.title ?? 'No title defined'} />))
        }
      
      </div>
    </div>
  )
}

export default Row