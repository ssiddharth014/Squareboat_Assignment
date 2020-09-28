import React from 'react'
import {Link} from 'react-router-dom'
import JobCreationSteps from '../JobCreationSteps/index'
import Header from '../Header'
import axios from 'axios'
import swal from 'sweetalert';

export default function Additionals({match})
{
    const [add,setadd]= React.useState('')
    const  handleSubmit=async (e)=>{
        let Job=await axios.post(`http://localhost:5000/users/createJob`,
        {"name":`${match.params.id1}`,
        "id":localStorage.getItem("id"),
        "description":`${match.params.id2}`,"requirements":`${match.params.id3}`,"additionals":`${add}`});
        
        console.log(Job.status)
        swal({
            title: "Registration Succesful",
            text: "Login, Post Job and hire",
            icon: "success",
          });
        if(Job.status)
        {
            swal({
                title: "Registration Succesful",
                text: "Login, Post Job and hire",
                icon: "success",
              });
        }
        
console.log(Job)
debugger;
e.preventDefault();
    }
    
    return (
        <>
        <Header/>
        <JobCreationSteps step1 step2 step3 step4 step5></JobCreationSteps>
        <div className="form">
      <form >
        <ul className="form-container">
          <li>
            <h2>Create Job</h2>
          </li>

          <li>
            <label htmlFor="title">
              Description
          </label>
            <input type="text" name="title" id="title" onChange={(e)=>setadd(e.target.value)}>
            </input>
          </li>
          


          <li >
             
              
                <div className="d-flex justify-content-around">
                
                  <Link Link to={`/createJob/${match.params.id1}/${match.params.id2}`} ><button type="submit" className="btn btn-danger">Back</button></Link>
                   

              

              
            
                 
                   
                 <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Add Job</button>
           
            
                
              

              </div>
             
              
              
            
          </li>

        </ul>
      </form>
    </div>

        
        </>
    )
}