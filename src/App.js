import React from "react";
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import Home from "./components/home/home.component";/
import SeondPage from "./components/secondpage/secondpage.component";
import FirstPage from "./components/FirstPage/firstpage.component";
import { useState } from "react";

// import GetImages from "./components/images/images";

function App() {
    const [gameOptions, setGameOptions] = useState({});

    // const images = GetImages(gameOptions);
    // console.log({ images });

    // console.log(gameOptions.category);
    // console.log(gameOptions.count);
    const startGame = (options) => {
        console.log("options", options);
        setGameOptions(options);
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage startGame={startGame} />} />
                <Route path="/secondpage" element={<SeondPage gameOptions={gameOptions} />} />
            </Routes>
        </Router>
    );
}

export default App;
