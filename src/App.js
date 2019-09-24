import React, {useState} from 'react';
import Header from './Header.js';
import Front from './Front.js';
import Slider from './Slider.js';
import Preloader from './Preloader.js';

import './App.css';

function App() {

  let [loaded, setLoaded] = useState(false);

  //etTimeout(() => {setLoaded(true)}, 2000);

  return (
    <div className="App">
      <Header/>
      <Front/>
      <Slider/>
      <Preloader loaded={loaded}/>
    </div>
  );
}

export default App;
