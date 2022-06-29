import React from 'react'
import './App.css';


const Footer = () =>{
    return(
    
<>
<footer id="footer" >
<div className="container pt-5 pb-3"  >
<div className="row">
<div className="col-md-3" >
	
<h2>Contact Us</h2><br/>
<p  className="contact">23 Main, Street</p>
<p className="contact">New York, United States</p>
<p className="contact">+92 3162859445</p>
<p className="contact">theproviders98@gmail.com</p>


</div>


<div class="col-md-3">
<h2 >Quick Links</h2><br/>
<p  className="linkc"><a href="#"> Home  </a></p>
<p className="linkc"><a href="#"> Gallery  </a></p>
<p className="linkc"><a href="#">  Contact Us </a></p>
<p className="linkc"><a href="#"> About Us  </a></p>



</div>




<div className="col-md-3">
<h2 >Social Media</h2><br/>
<div className="social-media">
	
	<ul class="list-unstyled">
	<li><a href="#"> <i className="fab fa-facebook-f"> </i></a>  </li>
	<li><a href="#"> <i className="fab fa-twitter"> </i></a>  </li>
	<li><a href="#"> <i className="fab fa-instagram"> </i></a>  </li>
	<li><a href="#"> <i className="fab fa-google-plus-g"> </i></a>  </li>
	<li><a href="#"> <i className="fab fa-youtube"> </i></a>  </li>
	
	</ul>




</div>





</div>



<div className="col-md-3">
	<h3 >Subcribe Our New Letter</h3><br/>
<form>
<input type="text" name="subcribe" placeholder="Enter Gmail" className="form-control" required="" /><button class="btn btn-success">Submit</button>
</form>


</div>
</div>


</div>

<hr/>
<div className="container">
<div className="row">
<h5>Copyright ©2021 All rights reserved | Website by Muhammad Farhan</h5>
</div>
</div>


</footer>

</>
    )
}

export default Footer;