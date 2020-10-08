import{JOBS_ALL_REQUEST,JOBS_ALL_SUCCESS, JOBS_ALL_FAIL,
    JOBS_DETAIL_REQUEST,JOBS_DETAIL_SUCCESS, JOBS_DETAIL_FAIL, 
    JOB_APPLY_REQUEST,JOB_APPLY_SUCCESS,JOB_APPLY_FAIL,
    JOB_APPLIED_REQUEST,JOB_APPLIED_SUCCESS,JOB_APPLIED_FAIL,
    JOBS_COMP_REQUEST,JOBS_COMP_SUCCESS,JOBS_COMP_FAIL,
    JOB_CREATE_REQUEST,JOB_CREATE_SUCCESS,JOB_CREATE_FAIL} from '../constants/jobsConstants'

import axios from 'axios'

const AllJobs=(values)=> async (dispatch)=>{
    try{
        dispatch({type:JOBS_ALL_REQUEST})
        console.log("find")

        let Jobs= await axios.get(`http://localhost:5000/users/allJobs`)
        console.log("j",Jobs)
        dispatch({type:JOBS_ALL_SUCCESS,payload:Jobs.data.jobs})
        console.log("kl",Jobs.data.jobs)


    }
    catch(err)
    {
        dispatch({type:JOBS_ALL_FAIL,payload:err.message});

    }
}
const JobDetail=(id,email)=>async (dispatch)=>{
    try{
        dispatch({type:JOBS_DETAIL_REQUEST})
        const jobDetails=await  axios.get(`http://localhost:5000/users/job/${id}/${email}`)
        console.log(jobDetails.data)

        dispatch({type:JOBS_DETAIL_SUCCESS,payload:jobDetails.data})

    }
    catch(err)
    {
        dispatch({type:JOBS_DETAIL_FAIL,payload:err.message});

    }

}
const JobApply=(id1,id2)=>async(dispatch)=>{
    try{
        console.log(id1,id2)
        dispatch({type:JOB_APPLY_REQUEST})
        const jobApply=await axios.post(`http://localhost:5000/users/JobApply/${id1}/${id2}`)
        console.log(jobApply)

        dispatch({type:JOB_APPLY_SUCCESS,payload:jobApply.data})

    }
    catch(err)
    {
        dispatch({type:JOB_APPLY_FAIL,payload:err.message});

    }
}
const JobApplied=(id1)=>async(dispatch)=>{
    try{
        console.log(id1)
        dispatch({type:JOB_APPLIED_REQUEST})
        const jobApplied=await axios.get(`http://localhost:5000/users/JobsApplied/${id1}`)
        console.log("hey",jobApplied.data.myData.apply)

        dispatch({type:JOB_APPLIED_SUCCESS,payload:jobApplied.data.myData.apply})

    }
    catch(err)
    {
        dispatch({type:JOB_APPLIED_FAIL,payload:err.message});

    }
}
const CompanyJobs=(id)=>async(dispatch)=>{
    try{
        dispatch({type:JOBS_COMP_REQUEST})
        console.log("find")

        let compJobs= await  axios.get(`http://localhost:5000/users/CompanyJobs/${id}`)
        console.log("j0",compJobs)
        dispatch({type:JOBS_COMP_SUCCESS,payload:compJobs.data.jobs})
        console.log("kl",compJobs.data.jobs)


    }
    catch(err)
    {
        dispatch({type:JOBS_COMP_FAIL,payload:err.message});

    }

}
const CreateJob=(title,requirements,description,additionals,id)=>async(dispatch)=>{
    try{
        dispatch({type:JOB_CREATE_REQUEST})
        let jobCreate= await axios.post(`https://jobout1.herokuapp.com/users/createJob`,
        {"name":title,"id":id,"description":description,"requirements":requirements,"additionals":additionals});
        dispatch({type:JOB_CREATE_SUCCESS,payload:jobCreate})

    }
    catch(err)
    {
        dispatch({type:JOB_CREATE_FAIL,payload:err.message})

    }
}

export {AllJobs,JobDetail,JobApply,JobApplied,CompanyJobs,CreateJob}