import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {NavLink} from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";

import swal from 'sweetalert';

function ForgotPassword() {

  
const history =useHistory()

  
  return (
    <>
    <div style={{width:"100vw",height:"100vh",backgroundColor:"#E3EBFF"}}> 
    <div style={{"margin-top":"15vh"}}  className="d-flex justify-content-center ">
    
    <span className="newcard large" >
        <div className="d-flex justify-content-center"><div className=" rounded-circle fgt" ></div></div>
        
    
    <em><h3 className="text-center">Forgot Password ?</h3></em>
    <h6  className="text-center mr-2">If you have forgotten your password, you can reset it here
    </h6>
       <div>
       
        <div className="  mt-2 mb-2  " >
        <div>
    
        <Formik
       initialValues={{ email: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = '**Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = '***Invalid email address';
         }
         
         
         
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        async function reg(){
          
         
        
         if(values.email)
         {
            swal({
                title: "Login Credentials sent",
                text: "Check your email",
                icon: "success",
              });
         
           
           
         }
         else
         {
           swal({
             title: "Something went Wrong",
             text: "Retry",
             icon: "warning",
           });

         }
         setSubmitting(false)

        }
        reg()
         
       }}
     >
       {({ isSubmitting }) => (
         <Form>
            <label htmlFor="name"><h4 className="text-info ml-2 mt-2"><em>Email :</em></h4></label><br/>

            <Field type="email" name="email" className=" mt-2 mb-2 ml-2 input  no-outline" placeholder="abc@xyz.com" /><br/>
            <ErrorMessage name="email" className="text-danger input" component="div" /><br/>
            
            <button type="submit" disabled={isSubmitting} className="btn btnColor mt-2 mb-2 ml-2 input text-light">
            Send Login Credentials
            </button>
         </Form>
       )}
     </Formik>
        
   </div>
          
        
       
         
      </div>
     
      
    </div>
  </span><button 
          style={{"height":"5vh"}} className="btn btn-danger"onClick={()=>history.goBack()}>
          X
          </button><br/>
</div>
    </div>
   

</>

  );
}

export default ForgotPassword;
