import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AlbumList from "./components/album";
import Photo from "./components/photo";
import "./styles.css";

function App() {
    return (
            <div className="App">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<AlbumList/>}/>
                        <Route exact path="/photo" element={<Photo/>}/>
                    </Routes>
                </Router>
            </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);