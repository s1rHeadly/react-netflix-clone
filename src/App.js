import Row from './components/Row';
import requests from './utils/requests';


function App() {


  return (
    <>
      <Row title="Top Rated" endPoint={requests.fetchTopRated} />
      <Row title="Action Movies" endPoint={requests.fetchActionMovies} />
      <Row title="Comedy Movies" endPoint={requests.fetchComedyMovies} />
      <Row title="Horror Movies" endPoint={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" endPoint={requests.fetchRomanceMovies} />
      <Row title="Documentaries" endPoint={requests.fetchDocumentaries} />
    </>
  );
}

export default App;
