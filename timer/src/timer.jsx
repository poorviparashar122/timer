import React, { useState , useEffect} from "react";

const Counter = ()=>

 {
    const [seconds, setSeconds] = useState(0);
    const [IsActive, setIsActive] = useState(false);
    const[number,setNumber] =useState("")
    function handle (e){
        console.log(number)
    }
  
    function toggle() {
      setIsActive(!IsActive);
    }
  
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
     if(number==seconds && number!==""){
          reset()
     
     }
    
    useEffect(() => {
        let interval = null;
      if (IsActive && number>seconds) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!IsActive && seconds !== 0) {
        clearInterval(interval);
      }
     
      return () => clearInterval(interval);
    }, [IsActive, seconds]);
  
    return (
       <>
       
       <input type="number" name="timer" value={number}   onChange={(e) => setNumber(e.target.value)}/>
       <button onClick={handle}>Input End Time</button>
        <div>
              <div>
        <div>
          {seconds}
        </div>
        <div className="class1">
          <button className={`${IsActive ? 'active' : 'inactive'}`} onClick={toggle}>
            {IsActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={reset}>
            Reset
          </button>
        </div>
      </div>
        </div>
       </>
       
  
    );
  };

  export default Counter