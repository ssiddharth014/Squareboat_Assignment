import React from 'react'
import {Link} from 'react-router-dom'
export default function Display1 (props)
{
    return(
        <>
        <div class="card"  style={{"width": "18rem", backgroundColor:"#2e856e", border:"0",marginTop:"25vh"}}>
                    <div className="card-body">
                    <h2 className="card-title text-white">{props.title} </h2>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text text-white">{props.content}</p>
                    <Link to={`${props.location}`}>
                    <button type="button" className="btn text-white btn-outline-light rounded-pill"
                     style={{backgroundColor:"#2e856e"}}>{props.button}</button>
                     </Link>
                    </div>
        </div>

        </>
    )
}