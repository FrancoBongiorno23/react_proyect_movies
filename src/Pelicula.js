export default function Pelicula(props) {
    return (
        <div className="movie-item-style-2">
        <img src="images/uploads/mv1.jpg" alt=""/>
        <div className="mv-item-infor">
            <h6><a href="moviesingle.html">
                {props.titulo}
            </a></h6>
            <p className="rate"><i className="ion-android-star"></i>
                <span>{props.calificacion}</span> /10</p>
            <p className="describe">{props.descripcion}</p>
            <p className="run-time"> Duracion: {props.duracion}    .     <span>{props.clasificacion} </span>    .     <span>Lanzamiento: {props.lanzamiento}</span></p>
            <p>Director: <a href="#">Joss Whedon</a></p>
            <p>Reparto {props.reparto}</p>
        </div>
    </div>
    )
}