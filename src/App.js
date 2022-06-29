import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route , Switch } from 'react-router';
import About from './aboutus';
import Contact from './contactus';
import Navbar from './Navbar';
import Homedown from './Homedown';
import Gallery from './Gallery';
import Error from './Error';
const App = () =>{
  return(
    <>
       <Navbar/>
    <Switch>
      
      <Route path='/' exact component={Homedown}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/about' exact component={About}/>
      <Route path='/gallery' exact component={Gallery}/>
      <Route component={Error}/>

    </Switch> 


    </>
  )
}





export default App;