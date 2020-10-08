import{JOBS_ALL_REQUEST,JOBS_ALL_SUCCESS, JOBS_ALL_FAIL,
  JOBS_DETAIL_REQUEST,JOBS_DETAIL_SUCCESS, JOBS_DETAIL_FAIL, 
  JOB_APPLY_REQUEST,JOB_APPLY_SUCCESS,JOB_APPLY_FAIL,
  JOB_APPLIED_REQUEST,JOB_APPLIED_SUCCESS,JOB_APPLIED_FAIL,
  JOBS_COMP_REQUEST,JOBS_COMP_SUCCESS,JOBS_COMP_FAIL,
  JOB_CREATE_REQUEST,JOB_CREATE_SUCCESS,JOB_CREATE_FAIL} from '../constants/jobsConstants'


function AllJobsReducer(state ={}, action) {
    switch (action.type) {
      case JOBS_ALL_REQUEST:
        return { loading: true, jobs: [] };
      case JOBS_ALL_SUCCESS:
        console.log("red",action.payload)
        return { loading: false, jobs: action.payload };
      case JOBS_ALL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function JobDetailReducer(state={},action){
    switch (action.type) {
      case JOBS_DETAIL_REQUEST:
        return { loading: true };
      case JOBS_DETAIL_SUCCESS:
        console.log("red",action.payload)
        return { loading: false, jobDetail: action.payload };
      case JOBS_DETAIL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }

  }
  function JobApplyReducer(state={},action){
    switch (action.type) {
      case JOB_APPLY_REQUEST:
        return { loading_apply: true };
      case JOB_APPLY_SUCCESS:
        console.log("red",action.payload)
        return { loading_apply: false, apply: action.payload };
      case JOB_APPLY_FAIL:
        return { loading_apply: false, error_apply: action.payload };
      default:
        return state;
    }

  }
  function JobsAppliedReducer(state={},action){
    switch (action.type) {
      case JOB_APPLIED_REQUEST:
        return { loading: true };
      case JOB_APPLIED_SUCCESS:
        console.log("red",action.payload)
        return { loading: false, applied: action.payload };
      case JOB_APPLIED_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }

  }

  function CompanyJobsReducer(state ={}, action) {
    switch (action.type) {
      case JOBS_COMP_REQUEST:
        return { loading: true, jobs: [] };
      case JOBS_COMP_SUCCESS:
        console.log("red",action.payload)
        return { loading: false, jobs: action.payload };
      case JOBS_COMP_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function JobCreateReducer(state={},action)
  {
    switch (action.type) {
      case JOB_CREATE_REQUEST:
        return { loading: true};
      case JOB_CREATE_SUCCESS:
        console.log("red",action.payload)
        return { loading: false, job : action.payload };
      case JOBS_ALL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }

  }
  export {AllJobsReducer,JobDetailReducer,JobApplyReducer,JobsAppliedReducer,CompanyJobsReducer,JobCreateReducer}