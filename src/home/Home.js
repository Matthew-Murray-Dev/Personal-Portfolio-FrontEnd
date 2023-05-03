
import {Link} from "react-router-dom"

//import HW from "../layout/HW"
import LinkImage from "../layout/HW.jpg"

function Home() {return <div><h1>Testing</h1><br/><Link to="/HW"><img src={LinkImage} alt="HW"/></Link></div>}

export default Home;