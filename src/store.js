import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import {
    userSigninReducer,
    userRegisterReducer
  } from './component/reducers/usersReducer';

import {
  AllJobsReducer,JobDetailReducer,JobApplyReducer,JobsAppliedReducer,CompanyJobsReducer,JobCreateReducer
} from './component/reducers/jobsReducer'
const userInfo=Cookie.getJSON('userInfo') || [];
const initialState={
    userSignIn: userInfo,
    userRegister:userInfo
}
const reducer=combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  allJobs:AllJobsReducer,
  detailJob:JobDetailReducer,
  apply:JobApplyReducer,
  applied:JobsAppliedReducer,
  companyJobs:CompanyJobsReducer,
  JobCreate:JobCreateReducer

});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))

);
export default store;