import { useEffect, useState } from 'react';
import '../App.css';

const Reading = ({selectedSign, selectedTime, setSelectedSign, setSelectedTime, reset}) => {

    useEffect(()=>{
        try{
            fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${selectedSign}/${selectedTime}/`)
            .then(response => response.json())
            .then(setHoroscope);
    
            
        } catch(error){
            console.log(error)
        };
    
      }, [setSelectedSign, setSelectedTime])

    const [horoscope, setHoroscope] = useState(null); 

    console.log(selectedSign);
      console.log(selectedTime);
      console.log(horoscope);

    return(
        <>  
            <section id="pathToHoroscope" className="container p-5">
                <div className="container text-center text-white">
                    <h1 className="">{horoscope}</h1>
                </div>
            </section>
            <section id="backToHome" class="d-flex justify-content-center align-items-center">
                <button className="btn btn-warning col-3" onClick={reset}>Restart</button>
            </section>
        </>
    )
}

export default Reading;