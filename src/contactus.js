import React from 'react'
import Footer from './Footer';
import Slider from './slider';



const Contact = () =>{
    return(
        <>
               <Slider/>

        <h1 className="display-1 text-center text-primary mt-5">CONTACT US </h1>
        <h3 className="mt-3 text-center text-primary    ">Welcome on contact us page</h3>
        
        <div className="container mt-5 pt-5 pb-5 mb-5 bg-primary">
        <form>
        <div className="row" >
        <div className="col-md-4">
        <input type="text" placeholder="Enter First Name " className="form-control" required/>
        </div>
        <div className="col-md-4">
        <input type="text" placeholder="Enter Last Name" className="form-control" required/>
        </div>
        <div className="col-md-4">
        <input type="Email" placeholder="Enter Email" className="form-control" required/>
        </div>
        </div>
  
       <div className="row mt-5">
           <div className="col-md-6">
           <input type="password" placeholder="Enter Password" className="form-control" required/>
           </div>
           <div className="col-md-6">
           
            <select className="form-control">
            <option selected disabled>Country</option>
                <option>Pakistan</option>
                <option>India</option>
                <option>Dubai</option>
                <option>Bangladesh</option>
            </select>
            </div>
            </div>
            <div className="row mt-5">
           <div className="col-md-6">
           <select className="form-control ">
                <option selected disabled>City</option>
                <option>Karachi</option>
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Quetta</option>
            </select>
           </div>
           <div className="col-md-6">
           <select className="form-control ">
                <option selected disabled>District</option>
                <option>South</option>
                <option>East</option>
                <option>Korangi</option>
                <option>Kemari</option>
            </select>

           </div>
       </div>
       <div className="row mt-5">
       <div className="offset-3 col-md-6">
       <button className="btn btn-warning w-100">Submit</button>
     </div>
     <div className="col-md-6"></div>

       </div>

</form>
        </div>

   <Footer/>
     </>
    )
}


export default Contact;