import "./App.css";
import React from "react";
import Homepage from "../Components/Homepage/Homepage";
import Collection from "../Components/Collection/Collection";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Backlog from "../Components/Backlog/Backlog";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import { CollectionProvider } from "../Context/CollectionContext";
import Share from "../Components/Share/Share";

const App = () =>{
    return(
        <BrowserRouter>
            <CollectionProvider>
                <Routes>
                    <Route path="/login" element={<Login/>}>
                        
                    </Route>
                    <Route path="/signup"element={<Signup/>}>
                        
                    </Route>
                    <Route path="/backlog"element={<Backlog/>}>
                        
                    </Route>
                    <Route path="/user/:number/collection" element={<Collection/>}>
                        
                    </Route>
                    <Route exact path="/" element={<Homepage/>}></Route>
                </Routes>
                <Share></Share>
            </CollectionProvider>
        </BrowserRouter>
    );
}

export default App;