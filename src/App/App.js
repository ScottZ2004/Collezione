import "./App.css";
import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import Collection from "../Components/Collection/Collection";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { CollectionProvider } from "../Context/CollectionContext";

const App = () =>{
    return(
        <BrowserRouter>
            <CollectionProvider>
                <Routes>
                    <Route path="/login" element={<Login/>}>
                        
                    </Route>
                    <Route path="/signup"element={<Signup/>}>
                        
                    </Route>
                    <Route path="/user/:number/collection" element={<Collection/>}>
                        
                    </Route>
                    <Route exact path="/" element={<Homepage/>}></Route>
                </Routes>
            </CollectionProvider>
        </BrowserRouter>
    );
}

export default App;