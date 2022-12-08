//When an error occurs, throw this screen up 
//because the default react router one is disgusting

import { useRouteError } from "react-router-dom";
import './css/error.css'

export default function ErrorPage(){
    const error = useRouteError()
    console.error(error)

    return(
        <div id="ErrorPage">
            <h1>Oops!</h1>
            {/* This is too mean to keep in production. I'll change it eventually to be more
            professional */}
            <p>An error has occured. Likely due to the fact that one of us stupid.</p>
            <h5>It was me</h5>
            <p>
                <i className="errorText">{error.status}: {error.statusText}</i>
                <br/>
                <i className="errorText">{error.data}</i>
            </p>
        </div>
    )
}