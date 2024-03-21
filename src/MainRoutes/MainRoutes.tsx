import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Description/Signup";
import Signin from "../pages/Signin";
import Navbar from "../components/Navbar";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navbar/>}></Route>
           
            <Route path="/signup" element={<Signup/>}  ></Route>
            <Route path="/signin" element={<Signin/>}></Route>
        </Routes>
    )
}