import React from 'react'
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
  }
   
export default function Google()
{
    return(
    <>
    <GoogleLogin
      style={{border:"0"}}
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText=""
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
    </>

    )
}
   