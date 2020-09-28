import React, {Component} from 'react';

import { Link , Redirect} from "react-router-dom";
import {NavLink} from 'react-router-dom';

export default function Header(){
  




    


 
  const handleLogout=event=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userType')
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    console.log("h")
    window.location.href="/"
    

  }
 
  React.useEffect(()=>{
  //document.getElementById("body").style.backgroundColor="#EAF0F1";
},[])
return(
      <React.Fragment>







<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand  text-light" href="#">JOBOUT</a>
  <button className="navbar-toggler btn-light" type="button"  
  data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon bg-light "></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      




{!localStorage.getItem("token") ? (
<ul className="navbar-nav ml-auto ">    
        <li className="nav-item"><Link className="nav-link btnColor btn mb-2 text-light m-2" to="/SignupUser">User</Link>
        </li>

        <li className="nav-item"><Link className="nav-link btnColor btn text-light m-2" to="/SignupCompany">Recruiter</Link>
        </li>
</ul>
  ) : 
(null)}
      




{localStorage.getItem("token") && localStorage.getItem("userType")==="user" && (<>
  <ul className="navbar-nav mr-auto">
       <li className="nav-item"><Link className="nav-link btnColor btn mb-2 text-light m-2" to="/JobsPosted">Jobs</Link>
        </li>

        <li className="nav-item"><Link className="nav-link btnColor btn text-light m-2" to={`/JobsApplied/${localStorage.getItem("id")}`}>Jobs Applied</Link>
        </li>             
</ul>
<ul className="navbar-nav ml-auto ">
<li className="nav-item text-light m-2">
           {localStorage.getItem("email")}
           
        </li>
<li className="nav-item text-light m-2" onClick={handleLogout}> LogOut
        </li>
</ul>
</>
)}


{localStorage.getItem("token") && localStorage.getItem("userType")==="company"  ? (<>
<ul className="navbar-nav mr-auto">
       <li className="nav-item"><Link className="nav-link btnColor btn mb-2 text-light m-2" to={`/CompanyJobs/${localStorage.getItem("id")}`}>Jobs Posted</Link>
        </li>

        <li className="nav-item"><Link className="nav-link btnColor btn text-light m-2" to="/CreateJob">Create Job</Link>
        </li>             
</ul>
<ul className="navbar-nav ml-auto ">
        <li className="nav-item text-light m-2">
           {localStorage.getItem("email")}
           
        </li>
        <li className="nav-item text-light m-2" onClick={handleLogout}> LogOut
        </li>
</ul>
  
      </>
):(null)}

     
  
    
  </div>
</nav>




      </ React.Fragment>
      );
  }