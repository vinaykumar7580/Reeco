import {Routes, Route} from "react-router-dom"
import Dashboard from "../Pages/Dashboard"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
        </Routes>
    )

}
export default AllRoutes