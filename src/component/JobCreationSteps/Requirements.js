import React from 'react'
import {Link} from 'react-router-dom'
import JobCreationSteps from '../JobCreationSteps/index'
import Header from '../Header'
import JobForm from './JobForm'

export default function Requirements({match})
{
    const [req,setreq] =React.useState("")
    
    return (
        <>
        <Header/>
        <JobCreationSteps step1 step2 step3 step4></JobCreationSteps>
        <div className="form">
      <form >
        <ul className="form-container small">
          <li>
            <h2>Create Job</h2>
          </li>

          <li>
            <label htmlFor="title" className="text-primary">
              Requirements
          </label>
            <input type="text" name="title" id="title" onChange={(e)=>setreq(e.target.value)}>
            </input>
            <button className="btn btn-primary mt-3">+</button>
          </li>
          


          <li >
             
              
                <div className="d-flex justify-content-around">
                
                  <Link  to={`/createJob/${match.params.id1}`} ><button type="submit" className="btn btn-danger">Back</button></Link>
                   

              

              
                    {req ?(<Link to={`/createJob/${match.params.id1}/${match.params.id2}/${req}`}>
                   
                   <button type="submit" className="btn btn-primary">Continue</button>
             </Link>):(
                 <Link to={`/createJob/${match.params.id1}/${match.params.id2}}`}>
                   
                 <button type="submit" className="btn btn-secondary">Continue</button>
           </Link>
             )}
                
              

              </div>
             
              
              
            
          </li>

        </ul>
      </form>
    </div>
        

        
        </>
    )
}