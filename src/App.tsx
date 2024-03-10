import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import SampleProblem1 from './constants/SampleProblem1';
import ProblemDescription from './pages/Description/ProblemDescription';

function App() {

  const markdownText = SampleProblem1.problemStatement;

  return (
    <>
      <Navbar />
      <SideBar />
      <ProblemDescription descriptionText={markdownText}></ProblemDescription>
    </>
  );
}

export default App;
