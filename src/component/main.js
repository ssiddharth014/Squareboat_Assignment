import React from 'react';
import {Switch, Route, Redirect,withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Login from './first-page/login'
import Register from './first-page/signup'
import Landing from './Landing'
import Landing2 from './Landing2'
import SignUpUser from './SignUpUser'
import LoginUser from './LoginUser'
import SignUpCompany from './SignUpCompany'
import LoginCompany from './LoginCompany'
import Title from './JobCreationSteps/Title'
import Description from './JobCreationSteps/Description'
import Requirements from './JobCreationSteps/Requirements'
import Additional from './JobCreationSteps/Additional'
import JobsPosted from './JobsPosted'
import JobDetails from './JobDetails'
import CompanyJobs from './CompanyJobs'
import JobsApplied from './JobsApplied'
import ForgotPassword from './forgotPassword'
 function Main(){
    
    return(
    <>
    
    <Switch >
        {!localStorage.getItem("token")?(<>
            <Route exact path="/login" component={Login} />
        <Route exact path="/Signup" component={Register} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/Try" component={Landing2} />
        <Route exact path="/SignUpUser" component={SignUpUser} />
        <Route exact path="/LoginUser" component={LoginUser} />
        <Route exact path="/SignUpCompany" component={SignUpCompany}/>
        <Route exact path="/LoginCompany" component={LoginCompany} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <Redirect to="/" />
        </>):(null)}
        {localStorage.getItem("token") && localStorage.getItem("userType")=="user" ? (<>
            <Route exact path="/JobsPosted" component={JobsPosted} />
        <Route  exact path="/JobDetails/:id/:id1" component={JobDetails}/>
        
        <Route exact path="/JobsApplied/:id" component={JobsApplied}/>
        <Redirect to="/JobsPosted"/>
        </>):(null)}
            <>
            {localStorage.getItem("token") && localStorage.getItem("userType")=="company"?(<>
            <Route exact path="/CreateJob" component={Title} />
        <Route exact path="/CreateJob/:id1" component={Description} />
        <Route exact path="/CreateJob/:id1/:id2" component={Requirements} />
        <Route  path="/CreateJob/:id1/:id2/:id3" component={Additional} />
        
        <Route  exact path="/JobDetails/:id/:id1" component={JobDetails}/>
        <Route exact path="/CompanyJobs/:id" component={CompanyJobs}/>
        <Redirect to="/createJob" />
        
            
            
            </>):(null) }
        


            </>
        
        
    </Switch>
    

    </>    
    )};
export default Main;