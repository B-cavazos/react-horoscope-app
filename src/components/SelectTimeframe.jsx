import '../App.css';

const SelectTimeFrame = ({reset, setSelectedTime}) => {


    return (
      <>        
        <section id="pathToHoroscope" className="container p-5">
          <div className="row d-flex justify-content-center align-items-center">

            {['yesterday', 'today', 'tomorrow'].map((t, i)=>{
              return(
                <button className="btn btn-primary col-3 m-3" key={i} onClick={()=>{setSelectedTime(t)}}>
                  {t}
                </button>              
              );
            })} 
          
          </div>
        </section>
        <section id="backToHome" className="d-flex justify-content-center align-items-center">
          <button className="btn btn-warning col-3" onClick={reset}>Restart</button>
        </section>
      </>
    );
}

export default SelectTimeFrame;
