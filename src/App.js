import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper.js';
import peliculasJson from './peliculas.json';
import Paginacion from './paginacion';
import { useState } from 'react';


function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;
  const cantidadTotalDePeliculas = peliculasJson.length;
  const totalPaginas = Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);

  let peliculas = peliculasJson;

  const buscarPelicula = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';
    
    let respuesta = await fetch(url, {
      "method": 'GET',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "Origin": 'https://lucasmoy.dev'
      }
    });
    
    let json = await respuesta.json();
    debugger;
  };

  buscarPelicula();
  


  const cargarPeliculas = () => {
    peliculas = peliculas.slice(
      (paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA
    );
  };

  cargarPeliculas();

  return (
    <PageWrapper>
      {peliculas.map(peliculas => {  
      return <Pelicula titulo={peliculas.titulo} calificacion={peliculas.calificacion}  duracion={peliculas.duracion} clasificacion={peliculas.clasificacion} 
        lanzamiento={peliculas.lanzamiento} director={peliculas.director} reparto={peliculas.reparto} img={peliculas.img}>
        {peliculas.descripcion}
      </Pelicula>
      })};

      <Paginacion pagina={paginaActual} total={totalPaginas} onChange={(pagina) => {
        setPaginaActual(pagina);
      }} />

    </PageWrapper>
  );
}

export default App;
