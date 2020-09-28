import React from 'react';
import {Formik} from 'formik'
import Display1  from '../display/display1'
export default function Register()
{
    return(
        <>
        <div  style={{height:"100vh"}}>
        <div className="container-fluid " >
            <div className="row">
            <div  className="col-lg-6 col-12  d-flex justify-content-center" style={{backgroundColor:"#2e856e",height:"100vh"}}>
                <Display1 
                title="Welcome Back !"
                content="To keep connected with us, please login with your credentials" 
                button="Sign up"
                location="/login"
                 />
                
            </div>
                <div className="col-lg-6 col-10  d-flex justify-content-center align-middle">
                    <div className="card text-center" style={{border:"0",height:"100vh"}}>
                        
                        <div className="card-body" style={{marginTop:"25vh"}}>
                        <h2 className="card-title" style={{color:"#2e856e"}}>Sign In to JobOut</h2>
                        <h6>or use your email account</h6>
                        <div className="card-text text-center" >
                        <Formik
                                    initialValues={{ email: '', password: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                        errors.email = 'Required';
                                        } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                        errors.email = 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                        }, 400);
                                    }}
                                    >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        /* and other goodies */
                                    }) => (
                                        <form onSubmit={handleSubmit}>

                                            <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">@</span>
                                            
                                            <input  type="email"
                                                    className="field"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                
                                             />
                                             </div>
                                        </div>
                                        {errors.email && touched.email && errors.email}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">#</span>
                                            <input
                                                className="field"
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            </div>
                                            
                                            
                                        </div>
                                        
                                        
                                        {errors.password && touched.password && errors.password}
                                       
                                        
                        
                                        <button type="submit" disabled={isSubmitting} className="btn text-white btn-outline-light rounded-pill"
                                         style={{backgroundColor:"#2e856e"}}>Sign In</button>
                                        </form>
                                    )}
                        </Formik>
     </div>
                        
                        </div>
                        
                    </div>
                

                </div>
                

            </div>
            
        </div>
        </div>
        
        </>
    )
}