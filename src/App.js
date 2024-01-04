import Row from './components/Row';
import requests from './utils/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';


function App() {


  return (
    <div className='app'>
    <Nav />
    <Banner />
      <Row title="Top Rated" endPoint={requests.fetchTopRated} larger={true}/>
      <Row title="Action Movies" endPoint={requests.fetchActionMovies} larger={false} />
      <Row title="Comedy Movies" endPoint={requests.fetchComedyMovies} />
      <Row title="Horror Movies" endPoint={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" endPoint={requests.fetchRomanceMovies} />
      <Row title="Documentaries" endPoint={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
