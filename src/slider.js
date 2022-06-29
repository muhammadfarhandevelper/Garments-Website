import React , { useState } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


 let time = new Date().toLocaleTimeString();


const Slider =() =>{
    const [ctime , settime] = useState(time);
   
    const Updatetime = () =>{
        time = new Date().toLocaleTimeString();
        settime(time);
    }
    setInterval(Updatetime,1000);

    return(
        
<div id="bg_image">

  <h1 className="d-flex justify-content-center text-white display-2 " style={{ paddingTop : "350px"}}>
  Pakistan's Time : <span>{ctime}</span></h1>
  
</div>
    )
}



export default Slider;