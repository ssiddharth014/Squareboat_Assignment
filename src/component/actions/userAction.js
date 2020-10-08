import {USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,
    USER_SIGNIN_FAIL,USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,USER_LOGOUT} from '../constants/userConstants'

import axios from 'axios';
import Cookie from 'js-cookie'

const register=(values,type)=> async (dispatch)=>{
    dispatch({type:USER_REGISTER_REQUEST,payload:{values}})
    try{
        if(type=="user")
        {
        let user= await axios.post(`http://localhost:5000/users/JobSeekerRegister`,{values})    
        dispatch({type:USER_REGISTER_SUCCESS,payload:user.data});
        Cookie.set('userInfo',JSON.stringify(user.data)); 

        }else if(type=="company")
        {
        let user= await axios.post(`http://localhost:5000/users/RecruiterRegister`,{values})

        dispatch({type:USER_REGISTER_SUCCESS,payload:user.data});
        
        Cookie.set('userInfo',JSON.stringify(user.data));
       

        }
        

    }
    catch(err)
    {
    dispatch({type:USER_REGISTER_FAIL,payload:err.message})
    }
}

const signin=(values,type)=>async(dispatch)=>{
    
    dispatch({type:USER_SIGNIN_REQUEST,payload:{values}})
    try
    {

        if(type=="user")
        {
        let user = await axios.post(`http://localhost:5000/users/JobSeekerSignIn`,{values})
        dispatch({type:USER_SIGNIN_SUCCESS,payload:user.data})
        Cookie.set('userInfo',JSON.stringify(user.data));
        }
        else if(type=="company")
        {
        let user = await axios.post(`http://localhost:5000/users/RecruiterSignIn`,{values})
        dispatch({type:USER_SIGNIN_SUCCESS,payload:user.data})
        Cookie.set('userInfo',JSON.stringify(user.data));   
        }

    }
    catch(err)
    {
        dispatch({type:USER_SIGNIN_FAIL,payload:err.message})

    }
}
const logout = () => (dispatch) => {

    Cookie.remove("userInfo");
  
    dispatch({ type: USER_LOGOUT })
  }
  export {signin, register,logout}