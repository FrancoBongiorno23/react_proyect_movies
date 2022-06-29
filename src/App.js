import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper.js';

function App() {

  let peliculas = [
    {
      titulo:"Oblivion (2012)",
      calificacion:"8.1",
      duracion:"Run Time: 2h21",
      clasificacion:"MMPA: PG-13",
      lanzamiento:"1 May 2015",
      director:"Joss Whedon",
      reparto:"Robert Downey Jr, Chris Evans, Chris Hemsworth",
      img:"images/uploads/mv1.jpg"
    },
    {
      titulo:"into the wild (2014)",
      calificacion:"7.8",
      duracion:"Run Time: 2h21",
      clasificacion:"MMPA: PG-13",
      lanzamiento:"1 May 2015",
      director:"Anthony Russo",
      reparto:"Chris Evans, Samuel L. Jackson, Scarlett Johansson",
      img:"images/uploads/mv2.jpg"
    }
  ];

  return (
	<PageWrapper>

		<Pelicula titulo="Oblivion (2012)" calificacion="8.1"  duracion="Run Time: 2h21" clasificacion="MMPA: PG-13" 
        lanzamiento="1 May 2015" director="Joss Whedon" reparto="Robert Downey Jr, Chris Evans, Chris Hemsworth" img="images/uploads/mv1.jpg">
        Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
    </Pelicula>


	</PageWrapper>
  );
}

export default App;
