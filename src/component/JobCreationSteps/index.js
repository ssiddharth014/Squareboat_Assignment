import React from 'react';
export default function JobCreationSteps(props)
{
    return(
        <>
        <div className="JobCreation-Steps  col-lg-10 col-md-8 col-12">
            <div className={props.step1 ? 'active' : ''}>Signin</div>
            <div className={props.step2 ? 'active' : ''}>Title</div>
            <div className={props.step3 ? 'active' : ''}>Description</div>
            <div className={props.step4 ? 'active' : ''}>Requirements</div>
            <div className={props.step5 ? 'active' : ''}>Additionals</div>
            
        </div>
        </>
    )
}
