import {Route, Routes} from "react-router-dom";
import SignIn from "../pages/SignIn.tsx";
import SignUp from "../pages/SignUp.tsx";
import NotFound from "../pages/NotFound.tsx";
import ProblemDescription from "../pages/Description/ProblemDescription.tsx";
import SampleProblem1 from "../constants/SampleProblem1.ts";
import {Home} from "../pages/Home.tsx";

export default function MainRoute() {
    const markdownText = SampleProblem1.problemStatement;
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/problem" element={<ProblemDescription descriptionText={markdownText}/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}
