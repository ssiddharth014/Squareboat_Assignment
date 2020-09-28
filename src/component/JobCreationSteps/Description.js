import React from 'react'
import {Link} from 'react-router-dom'
import JobCreationSteps from '../JobCreationSteps/index'
import Header from '../Header'
import JobForm from './JobForm'

export default function Description({match})
{
    const [des,setDes]= React.useState('')
    return (
        <>
        <Header/>
        <JobCreationSteps step1 step2 step3></JobCreationSteps>
        <div className="form ">
      <form >
        <ul className="form-container small">
          <li>
            <h2>Create Job</h2>
          </li>

          <li>
            <label htmlFor="title" className="text-primary">
              Description
          </label>
            <input type="text" name="title" id="title" onChange={(e)=>setDes(e.target.value)}>
            </input>
          </li>
          


          <li >
             
              
                <div className="d-flex justify-content-around">
                
                  <Link  to={`/createJob`} ><button type="submit" className="btn btn-danger">Back</button></Link>
                   

              

              
                    {des ?(<Link to={`/createJob/${match.params.id1}/${des}`}>
                   
                   <button type="submit" className="btn btn-primary">Continue</button>
             </Link>):(
                 <Link to={`/createJob/${match.params.id1}`}>
                   
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
