import React from "react";
import { Routes,Route, Navigate} from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import Login from "./components/Login";
import Content from "./components/Content";
import Community from "./components/comunnity";
import NotFound from "./common/NotFound";





const App = () => {
    return(
        <>
        <Navbar/>
        <Sidebar/>
      
                <Routes>
                    <Route path="/" element={<Navigate replace to="/upcomingMovies"/>}/> 
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/:type" element={<Content/>}/> 
                    <Route path="/geners/:id" element={<Content/>}/> 
                    <Route path="/user/register" element={<Register/>}/>
                    <Route path="/user/login" element={<Login/>}/>
                    <Route path="/user/community" element={<Community/>}/>
                </Routes> 
                 
       
        </>
    )
}

export default App; 