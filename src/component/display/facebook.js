import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
 
const responseFacebook = (response) => {
  console.log(response);
}
 
export default function Facebook(){
    return(
<>
<FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    textButton=""
    callback={responseFacebook}
    
    icon="fa-facebook"
  />
</>
)
}