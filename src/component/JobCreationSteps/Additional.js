import React from 'react'
import {Link} from 'react-router-dom'
import JobCreationSteps from './index'
import Header from '../Header'
import axios from 'axios'
import swal from 'sweetalert';

export default function Additional({match})
{
    const [add,setadd]= React.useState('')
    const  handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("yup");


        let Job=await axios.post(`https://jobout1.herokuapp.com/users/createJob`,
        {"name":`${match.params.id1}`,
        "id":localStorage.getItem("id"),
        "description":`${match.params.id2}`,"requirements":`${match.params.id3}`,"additionals":`${add}`});
        
        
        
        if(Job.data.data._id)
        {
            swal({
                title: "Job Added",
                text: "Congratulations",
                icon: "success",
              });
        }
        else{
            swal({
                title: "Job Not Added",
                text: "Try Again",
                icon: "error",
              });
        }
        
console.log(Job)

        
    }
    
    return (
        <>
        <Header/>
        <JobCreationSteps step1 step2 step3 step4 step5></JobCreationSteps>
        <div className="form">
      <form >
        <ul className="form-container small">
          <li>
            <h2>Create Job</h2>
          </li>

          <li>
            <label htmlFor="title" className="text-primary">
              Additional Requirements
          </label>
            <input type="text" name="title" id="title" onChange={(e)=>setadd(e.target.value)}>
            </input>
          </li>
          


          <li >
             
              
                <div className="d-flex justify-content-around">
                
                  <Link  to={`/createJob/${match.params.id1}/${match.params.id2}`} ><button type="submit" className="btn btn-danger">Back</button></Link>
                   

              

              
            
                 
                   
                 <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Add Job</button>
           
            
                
              

              </div>
             
              
              
            
          </li>

        </ul>
      </form>
    </div>

        
        </>
    )
}