import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Description/Signup";
import Signin from "../pages/Signin";
import SampleProblem1 from '../constants/SampleProblem1';
import ProblemDescription from '../pages/Description/ProblemDescription';

export default function MainRoutes(){

    const markdownText = SampleProblem1.problemStatement;
    return(
        <Routes>
            {/* <Route path="/" element={<Navbar/>}></Route> */}
            <Route  path="/" element={<ProblemDescription   descriptionText={markdownText}/>}></Route>
            <Route path="/signup" element={<Signup/>}  ></Route>
            <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
    )
}