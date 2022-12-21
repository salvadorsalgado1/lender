import { Link } from "react-router-dom"

const Landing = ()=>{
    return(
        <div>
            <h1>Landing</h1>
            <Link to={'/home'}>Home</Link>
            <Link to={'/login'}>Login!</Link>
        </div>
    )
}

export default Landing