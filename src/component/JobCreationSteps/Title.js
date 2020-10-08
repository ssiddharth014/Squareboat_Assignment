import React from 'react'
import {Link} from 'react-router-dom'
import JobCreationSteps from '../JobCreationSteps/index'
import Header from '../Header'
import JobForm from './JobForm'

export default function Title()
{
    const[title,setTitle]= React.useState()
    
    return (
        <>
        <Header/>
        <div style={{width:"100vw"}}>
        <JobCreationSteps step1 ></JobCreationSteps>
        <div className="form col-lg-10 col-md-8 col-10">
      <form >
        <ul className="form-container small">
          <li>
            <h2>Create Job</h2>
          </li>

          <li>
            <label htmlFor="title" className="text-primary">
              Title
          </label>
            <input type="text" name="title" id="title" value={title} placeholder={title} onChange={(e)=>setTitle(e.target.value)}>
            </input>
            <button className="btn btn-primary mt-3">+</button>
          </li>
          


          <li >
             
              
                <div className="d-flex justify-content-end">
                    {!title  ?(
                    
                    <Link to={`/createJob`}>
                   
                 <button type="submit" className="btn btn-secondary">Continue</button>
           </Link>
                    ):(
                        <Link to={`/createJob/${title}`}>
                   
                   <button type="submit" className="btn btn-primary">Continue</button>
             </Link>
                 
             )}
              </div>            
           </li>

        </ul>
      </form>
    </div>

        </div>        
        </>
    )
}
