import React from 'react';
import {Link} from 'react-router-dom'
export default function JobForm(props)
{
  const [title,settitle]= React.useState('')
    return(
        <>
        <div className="form">
      <form >
        <ul className="form-container">
          <li>
            <h2>Create Job</h2>
          </li>

          <li>
            <label htmlFor="title">
              {props.title}
          </label>
            <input type="text" name="title" id="title" onChange={(e)=>settitle(e.target.value)}>
            </input>
          </li>
          


          <li >
              {props.buttons=="2" && (<>
                <div className="d-flex justify-content-around">
                  <Link Link to={`/createJob/${props.prev}`} ><button type="submit" className="btn btn-danger">Back</button></Link>
                   <Link Link to={`/createJob/${props.next}/${title}`}><button type="submit" className="btn btn-primary">Continue</button></Link>
              

              

              </div>
              </>)}
              {props.buttons=="1" && (<>
                <div className="d-flex justify-content-end">
                  <Link to={`/createJob/${props.next}`}><button type="submit" className="btn btn-primary">Continue</button></Link>
              

              </div>
              </>)}
              {props.buttons=="4" && (<>
                <div className="d-flex justify-content-around">
                  <Link Link to={`/createJob/${props.prev}`} ><button type="submit" className="btn btn-danger">Back</button></Link> 
                  <Link to="/createJob/1"><button type="submit" className="btn btn-primary">Add</button></Link>
              

              </div>
              </>)}
              
            
          </li>

        </ul>
      </form>
    </div>
        </>
    )
}