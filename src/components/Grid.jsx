
import { useParams } from "react-router-dom";
import Card from "../common/Card";

const Grid = (props) => {
  let {type} = useParams();
  let result = props[type] ? props[type] : props["moviesGener"];
  //muestro en el front solo peliculas/series con poster 
  let onlyWithPoster = result.filter(movie => movie.poster_path)
    return (
        <>
        {onlyWithPoster.map((data, i) => (
          <div key={i}>
            <Card data={data} />
          </div>
        ))}
     </>
    );
  };
 

    




 

export default Grid;