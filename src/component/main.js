import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Landing from './Into/Landing'
import Landing2 from './Into/Landing2'
import SignUpUser from './Register/SignUpUser'
import LoginUser from './Login/LoginUser'
import SignUpCompany from './Register/SignUpCompany'
import LoginCompany from './Login/LoginCompany'
import Title from './JobCreationSteps/Title'
import Description from './JobCreationSteps/Description'
import Requirements from './JobCreationSteps/Requirements'
import Additional from './JobCreationSteps/Additional'
import JobsPosted from './Jobs/JobsPosted'
import JobDetails from './Jobs/JobDetails'
import CompanyJobs from './Jobs/CompanyJobs'
import JobsApplied from './Jobs/JobsApplied'
import ForgotPassword from './forgotPassword/forgotPassword'
import { useSelector } from 'react-redux';
function Main(){
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    
    return(
    <>
    
    <Switch >
        {!userInfo && (<>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Try" component={Landing2} />
        <Route exact path="/SignUpUser" component={SignUpUser} />
        <Route exact path="/LoginUser" component={LoginUser} />
        <Route exact path="/SignUpCompany" component={SignUpCompany}/>
        <Route exact path="/LoginCompany" component={LoginCompany} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <Redirect to="/" />
        </>)}
        {userInfo && userInfo.userType=="user" && (<>
        <Route exact path="/JobsPosted" component={JobsPosted} />
        <Route  exact path="/JobDetails/:id/:id1" component={JobDetails}/>
        <Route exact path="/JobsApplied" component={JobsApplied}/>
        <Redirect to="/JobsPosted" />
        </>)}
        {userInfo && userInfo.userType=="company" &&(<>
        <Route exact path="/CreateJob" component={Title} />
        <Route exact path="/CreateJob/:id1" component={Description} />
        <Route exact path="/CreateJob/:id1/:id2" component={Requirements} />
        <Route  path="/CreateJob/:id1/:id2/:id3" component={Additional} />
        <Route  exact path="/JobDetails/:id/:id1" component={JobDetails}/>
        <Route exact path="/CompanyJobs" component={CompanyJobs}/>
        <Redirect to="/CreateJob" />
        </>)}    
    </Switch>
    

    </>    
    )};
export default Main;