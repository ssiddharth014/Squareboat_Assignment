import React, {useEffect} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {signin} from '../actions/userAction'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'


export default function LoginForm(props)
{
  const dispatch= useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const history = useHistory();

  React.useEffect(()=>{
    
    if(userInfo && userInfo.userType=="user")
    {
      console.log("info",userInfo,history)
      history.push('/JobsPosted')
    }
    else if(userInfo && userInfo.userType=="company")
    {
      console.log("info",userInfo)
      history.push('/CreateJob')

    }
    else if(error)
    {
      
      swal({
        title: "Login UnSuccesful",
        text: "Retry",
        icon: "warning",
      });

    }
    return () => {
      //
    };

  },[userInfo,loading,error])
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
         console.log(values)
        //Cookie.remove("userInfo");
         dispatch(signin({values},props.userType))
      
         setSubmitting(false)         
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