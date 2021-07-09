import { useState, useEffect } from 'react';
import SelectSign from './components/SelectSign';
import SelectTimeFrame from './components/SelectTimeframe';
import Reading from './components/Reading';
import './App.css';

function App() {

  useEffect(()=>{
    fetch('http://sandipbgt.com/theastrologer/api/sunsigns')
    .then(response => response.json())
    .then(setSigns);

  }, [])

  const [signs,setSigns]=useState([]);
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const reset = () => {
    setSelectedSign(null);
    setSelectedTime(null);
  }

    return (
      <div className="App">
        <header className="App-header text-center text-white pt-5">
          <h1 className="p-5">Horoscope App</h1>
          <hr />
        </header>

        {!selectedSign && (<SelectSign signs={signs} setSigns={setSigns} setSelectedSign={setSelectedSign} reset={reset}/>)}

        {selectedSign && !selectedTime && (<SelectTimeFrame setSelectedTime={setSelectedTime} reset={reset}/>)}
        
        {selectedSign && selectedTime && (<Reading selectedSign={selectedSign} selectedTime={selectedTime} setSelectedSign={setSelectedSign} setSelectedTime={setSelectedTime} reset={reset}/>)}
        
      </div>
    );
}

export default App;
