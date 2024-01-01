import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../utils/helpers';


const useFetch = (request) => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
   useEffect(() => {
    
    const controller = new AbortController(); // this is for racing condtion handling

    // our async function to make the fetch request

    const getData = async() => {
      
      setLoading(true);

      try {
        const response = await fetch(`${BASE_API_URL}${request}`, {
          signal: controller.signal
        });

        if(!response.ok){
          throw new Error('Something went wrong')
        }

         // console.log(response)

         if(response.status === 200){
          const data = await response.json();
          const results = data?.results ?? 'no results found';

            if(results){
              setMovies(results);
              setLoading(false) 
            }
         }

      } catch (error) {
        if (error.name !== "AbortError") {
          // console.log(error.message);
          setError(error.message);
        }
      }finally{
        setLoading(false)

      }
        
    } 

    // call the getData function
    getData();

    // cleanup the controller for race conditioning
    return(() => {
      controller.abort();
    })
   
   }, [request]); // use the request as a dependancy


   return {movies, loading, error} // export state



}

export default useFetch