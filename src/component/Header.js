import React from 'react';

import { Link , Redirect,useHistory} from "react-router-dom";
import {NavLink} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {logout} from './actions/userAction'
export default function Header(){
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch()
  const history= useHistory()
 
 const handleLogout=e=>{
   dispatch(logout())

 }
 
 React.useEffect(()=>{

 },[userInfo])

return(
<React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  JOBOUT
  <button className="navbar-toggler btn-light" type="button"  
  data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon bg-light "></span>
  </button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
    
{!userInfo && (
<ul className="navbar-nav ml-auto ">    
        <li className="nav-item"><Link className="nav-link btnColor btn mb-2 text-light m-2" to="/SignupUser">User</Link>
        </li>

        <li className="nav-item"><Link className="nav-link btnColor btn text-light m-2" to="/SignupCompany">Recruiter</Link>
        </li>
</ul>
)}
{userInfo && userInfo.userType=="user" && (<>
<ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link btnColor btn mb-2 text-light m-2" to="/JobsPosted">Jobs</Link>
      </li>

      <li className="nav-item"><Link className="nav-link btnColor btn text-light m-2" to={`/JobsApplied`}>Jobs Applied</Link>
      </li>             
</ul>
<ul className="navbar-nav ml-auto ">
      <li className="nav-item text-light m-2">{userInfo.email}
      </li>
      <li className="nav-item text-light m-2" onClick={handleLogout}> LogOut
      </li>
</ul>

</>)}
{userInfo && userInfo.userType=="company" &&(<>
<ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link btnColor btn mb-2 text-light m-2" to={`/CompanyJobs/`}>Jobs Posted</Link>
      </li>
      <li className="nav-item"><Link className="nav-link btnColor btn text-light m-2" to="/CreateJob">Create Job</Link>
      </li>             
</ul>
<ul className="navbar-nav ml-auto ">
        <li className="nav-item text-light m-2">{userInfo.email}
        </li>
        <li className="nav-item text-light m-2" onClick={handleLogout}> LogOut
        </li>
</ul>
</>)}    
</div>
</nav>
</ React.Fragment>
      );
  }