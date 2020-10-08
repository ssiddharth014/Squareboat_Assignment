import React from 'react'
import {Link} from 'react-router-dom'
import JobCreationSteps from './index'
import Header from '../Header'
import swal from 'sweetalert';
import {useSelector,useDispatch} from 'react-redux'
import {CreateJob} from '../actions/jobsAction'
import {useHistory} from 'react-router-dom'

export default function Additional({match})
{
  const[add,setadd]= React.useState('')
  const dispatch= useDispatch();
  const createdJob=useSelector(state=>state.JobCreate)
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo } = userSignin;
  const {loading,error,job}=createdJob;
  const history= useHistory();
  const  handleSubmit=async (e)=>{
    document.getElementById("cover").style.display="block"

  dispatch(CreateJob(match.params.id1,match.params.id2,match.params.id3,add,userInfo._id))

      
    e.preventDefault();
   

        
    }
    if(job)
{
  document.getElementById("cover").style.display="none"
  swal({
    title: "Job Added",
    text: "Congratulations",
    icon: "success",
  });
  history.push("/CompanyJobs")

}
 else if(error)
 {
  document.getElementById("cover").style.display="none"
      swal({
          title: "Job Not Added",
          text: "Try Again",
          icon: "error",
        });
        history.push("/CreatedJob")
  }
    
   
    return (
        <>
        <Header/>
        <div id="cover"></div>
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
            <button className="btn btn-primary mt-3">+</button>

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