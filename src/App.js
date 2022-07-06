import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper.js';
import peliculasJson from './peliculas.json';


function App() {

  let peliculas = peliculasJson;



  return (
	<PageWrapper>

    {peliculas.map(peliculas => {  
		return <Pelicula titulo={peliculas.titulo} calificacion={peliculas.calificacion}  duracion={peliculas.duracion} clasificacion={peliculas.clasificacion} 
      lanzamiento={peliculas.lanzamiento} director={peliculas.director} reparto={peliculas.reparto} img={peliculas.img}>
      {peliculas.descripcion}
    </Pelicula>
    })};


	</PageWrapper>
  );
}

export default App;
