import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {NavLink} from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import SignUpForm from './SigupForm'

function SignupUser() {

  
const history =useHistory()

  
  return (
    
   
<div style={{"marginTop":"15vh"}}  className="d-flex justify-content-center ">
    
    <span className="card ">
    
    <em><h3 className="text-center">Be a part and find your dream Job</h3></em>
    <h6  className="text-center mr-2">Already have an account? <Link  to='/LoginUser'> Login as User</Link><br/>
    </h6>
       <div>
       
        <div className="  mt-2 mb-2   " >
        <div>
            <SignUpForm userType="user"/>
    
    
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

export default SignupUser;


 
 