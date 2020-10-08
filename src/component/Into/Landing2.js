import React, { useState, useEffect } from 'react';
import Header from '../Header.js'
import { Link , Redirect} from "react-router-dom";
function  Landing2() {
   

    const [profile, setprofile] = React.useState([])
    const[loading,setloading] = React.useState(true)
    useEffect(() => {
      

    },[])


    return (
<>
    <Header/>

<div >
<div className="container">
<h1 className="text-center">GETTING STARTED</h1>
<div className="row d-flex justify-content-around">
        <div className="col-lg-3 col-md-4 col-8  ml-2 mt-2 mb-2 card">
                        <img src="data:image/jpeg;base64,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" 
                        className="neg" 
                        width="100%" height="150" />
                        <h4 className="text-center">
                        For Recruiters
                        </h4>
                        <h6 className="text-center mt-2">
                        Be on the Top by Hiring the best of Talents:
                        </h6>
                            <ul className="ml-3">
                                <li className="ml-3">Register Yourself</li>
                                <li className="ml-3">Post the Job</li>
                                <li className="ml-3">Filter Applicants</li>
                                <li className="ml-3">Hire the best of the best </li>
                            </ul>
                        {localStorage.token ? (
                        <Link
                        className="btn btnColor mb-2 text-light" to="/LandingPage">Get Started
                        </Link>):(<Link
                        className=" btn btnColor mb-2 text-light" to="/SignUpCompany">Get Started
                        </Link>)}

        </div>


        <div className="col-lg-3 col-md-4 col-8  ml-2 mt-2 mb-2 card">
                    <img src="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="neg" width="100%" height="176" />

                    <h4 className="text-center">
                        For Job Seekers</h4>
                    <h6 className="text-center">
                        Get your dream job at one click</h6>
                    <ul className="ml-3">
                        <li className="ml-3">Register Yourself</li>
                        <li className="ml-3">Apply to the available Jobs</li>
                        <li className="ml-3">Get Hired</li>
                        <li className="ml-3">Live your Dream</li>
                    </ul>
                    {localStorage.token ? (
                    <Link
                    className="btn btnColor mb-2 text-light" to="/LandingPage">Get Started
                    </Link>):(<Link
                    className=" btn btnColor mb-2 text-light" to="/SignUpUser">Get Started
                    </Link>)}
        </div>
</div>
</div>
</div>


</>
    )
}














export default Landing2;