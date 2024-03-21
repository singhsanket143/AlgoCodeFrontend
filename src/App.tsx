import './App.css';
import MainRoutes from './MainRoutes/MainRoutes';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import SampleProblem1 from './constants/SampleProblem1';
import ProblemDescription from './pages/Description/ProblemDescription';
import Signin from './pages/Signin';

function App() {

  const markdownText = SampleProblem1.problemStatement;

  return (
    <>
      {/* <Navbar />
       <SideBar />
      <ProblemDescription descriptionText={markdownText}></ProblemDescription> */}
     <MainRoutes />
    
     
    </>
  );
}

export default App;
