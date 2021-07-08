import '../App.css';

const SelectSign = ({signs,setSelectedSign, reset}) => {
    return(
        <>  
            <section id="pathToHoroscope" className="container p-5">
                <div className="row d-flex justify-content-center  align-items-center">
                    {signs.map((sign, i)=>{
                    return(
                        <button className="btn btn-primary col-3 m-3" key={i} onClick={()=>setSelectedSign(sign)}>
                        {sign}
                        </button>              
                    );
                    })} 
                
                </div>
                </section>
        </>
    )
}

export default SelectSign;