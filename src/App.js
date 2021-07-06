import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(()=>{
    fetch('http://sandipbgt.com/theastrologer/api/sunsigns')
    .then(response => response.json())
    .then(setSigns);

  }, [])

  const [signs,setSigns]=useState([]);

    return (
      <div className="App">
        <header className="App-header text-center text-white pt-5">
          <h1 className="p-5">Horoscope App</h1>
          <hr />
        </header>
        <section id="pathToHoroscope" className="container p-5">
          <div className="row d-flex justify-content-center">

            {signs.map((sign, i)=>{
              return(
                <button className="btn btn-primary col-3 m-3" key={i}>
                  {sign}
                </button>              
              );
            })} 
          
          </div>
        </section>
        <section id="backToHome"></section>
      </div>
    );
}

export default App;
