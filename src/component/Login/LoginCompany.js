import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {NavLink} from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import LoginForm from './LoginForm'

function LoginCompany() {

  
const history =useHistory()

  
  return (
    
   
<div style={{"marginTop":"15vh"}}  className="d-flex justify-content-center ">
    
    <span className="card large">
    
    <em><h3 className="text-center">Welcome Back !</h3></em>
    <h6  className="text-center mr-2">New User ? <Link  to='/SignUpCompany'> Sign Up</Link><br/>
    </h6>
  <div>     
  <div className="  mt-2 mb-2   " >
   <div>
    <LoginForm userType="company"/>
   </div>
  </div>
  </div>
  </span><button 
          style={{"height":"5vh"}} className="btn btn-danger"onClick={()=>history.goBack()}>
          X
          </button><br/>
</div>

  );
}

export default LoginCompany;