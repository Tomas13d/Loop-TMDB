import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./styles/index.scss";
import App from "./App";

export const UserContext = createContext();

//context para la info del user logeado y las pelicualas buscadas (se necesita en otros nodos)
const Root = () =>{
  const [user, setUser] = useState({}); 
  const [searched, setSearched] = useState([]);
  
  

  return(
    <BrowserRouter>
    <UserContext.Provider value={{user,searched,setUser,setSearched}}>
      <App/>
    </UserContext.Provider>
  </BrowserRouter>
  )
}


ReactDOM.render(<Root/>
 ,
  document.getElementById("root")
);
