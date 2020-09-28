import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';
export default function LoginForm(props)
{
    return (
        <>
        <Formik
       initialValues={{ email: '', password: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = '**Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = '***Invalid email address';
         }
         if(!values.password){
             errors.password='**Required'
         }
         
         
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        async function reg(){
          console.log(values)
         let re=await axios.post(`https://jobout1.herokuapp.com/users/${props.userType}`,{values});
         console.log(re.data)
         if(re.data.token)
         {
           localStorage.setItem("token",re.data.token)
           localStorage.setItem("userType",re.data.userType)
           localStorage.setItem("id",re.data._id)
           localStorage.setItem("email",re.data.email)
           if(re.data.userType=="user")
           {
             window.location="/JobsPosted"
           }
           else if(re.data.userType=="company")
           {
             window.location=`/CompanyJobs/${localStorage.getItem("id")}`
           }
           
         }
         else
         {
           swal({
             title: "Login UnSuccesful",
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
            <label htmlFor="password"><h4 className="text-info ml-2 "><em>Password :</em></h4></label><br/>
            <Field type="password" name="password" className=" mt-2 mb-2 ml-2 input  no-outline" />
            
            <ErrorMessage name="password" className="text-danger input" component="div" /><br/>
            
            
            <button type="submit" disabled={isSubmitting} className="btn btnColor mt-2 mb-2 ml-2 input text-light">
            Sign In
            </button>
         </Form>
       )}
     </Formik>
     <h6 className="text-center"><Link to="/ForgotPassword">Forgot Password ?</Link></h6>
        </>
    )
}