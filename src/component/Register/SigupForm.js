import React from 'react'
import {Redirect} from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {register} from '../actions/userAction'
export default function SignUpForm(props)
{
  const[state,setstate]= React.useState(false)
  const dispatch= useDispatch();
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const history = useHistory();


  React.useEffect(() => {
    if (userInfo&& userInfo.userType=="user") 
    {
      setstate(false)
      console.log("job posted user",userInfo)
      history.push('/LoginUser')
    }
    else if(userInfo&& userInfo.userType=="company") 
    {
      setstate(false)
      console.log("job posted")
      history.push('/LoginCompany')
    }
    else if(error)
    {
      console.log(state)
      swal({
              title: "Registration UnSuccesful",
              text: "Retry",
              icon: "warning",
            });

    }
    
    return () => {
      //
    };
  }, [userInfo,error,loading,history]);
  
    return (
<>


<Formik
       initialValues={{ name:"",email: '', password: '' ,confirmpassword:''}}
       validate={values => {
         const errors = {};
         if(!values.name)
         {
           errors.name='**Required'
         }
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
         else if(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)

         )
         {
            document.getElementById("p2").style.color="green"

         }
         else if(
           ! /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)

         )
         {
            document.getElementById("p2").style.color="red"

         }
          if(values.password.length>=8)
         {
            
                document.getElementById("p1").style.color="green"
        
            
         }
         else if(values.password.length<8)
         {
            
                document.getElementById("p1").style.color="red"
        
            
         }
         if(values.password !== values.confirmpassword)
         {
             errors.confirmpassword="** Password don't match"
         }
         return errors;
       }}
       onSubmit={(values,{ setSubmitting }) => {

        dispatch(register({values},props.userType))
          setSubmitting(false) 
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <label htmlFor="name"><h4 className="text-info ml-2 mt-2"><em>Name :</em></h4></label><br/>

            <Field type="text" name="name" className=" mt-2 mb-2 ml-2 input  no-outline" placeholder="SquareBoat" /><br/>
            <ErrorMessage name="name" className="text-danger input" component="div" /><br/>
            <label htmlFor="name"><h4 className="text-info ml-2 mt-2"><em>Email :</em></h4></label><br/>

            <Field type="email" name="email" className=" mt-2 mb-2 ml-2 input  no-outline" placeholder="abc@xyz.com" /><br/>
            <ErrorMessage name="email" className="text-danger input" component="div" /><br/>
            <label htmlFor="password"><h4 className="text-info ml-2 "><em>Password :</em></h4></label><br/>
            <Field type="password" name="password" className=" mt-2 mb-2 ml-2 input  no-outline" />
            
            <ErrorMessage name="password" className="text-danger input" component="div" /><br/>
            <label htmlFor="confirmpassword"><h4 className="text-info ml-2 "><em>Confirm Password :</em></h4></label><br/>
            <Field type="password" name="confirmpassword" className=" mt-2 mb-2 ml-2 input  no-outline" />
            
            <ErrorMessage name="confirmpassword" className="text-danger input" component="div" /><br/>
            <>
            <h6 className=" ml-1 mt-2">Suggestions for a strong password:</h6>
            <ul>
            <h6  className=" pl-2"><li className=" ml-3 list-unstyled" id="p2" >A combination of upper and lowercase letters, 
            numbers and special characters</li></h6>
            <h6  className=" pl-2"><li className=" ml-3 list-unstyled " id="p1">At least 8 characters or more</li></h6>
            </ul>
            </>

            <input type="checkbox" required name="check" className="ml-2"/><span className="ml-2">I agree to the Terms & conditions and the Standard disclosure terms</span>
            
            <button type="submit" disabled={isSubmitting} className="btn btn-primary mt-2 mb-2 ml-2 input">
            Submit
            </button>
         </Form>
       )}
     </Formik>
</>



    )
}