import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import SampleProblem1 from './constants/SampleProblem1';
import ProblemDescription from './pages/Description/ProblemDescription';
import ProblemList from './pages/ProblemList/ProblemList';

function App() {

  const markdownText = SampleProblem1.problemStatement;

  return (
    <div className='h-[100vh] overflow-hidden'>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path='/problems/list' element={<ProblemList />} />
        <Route path='/problem' element={ <ProblemDescription descriptionText={markdownText} />} />
      </Routes>
    </div>
  );
}

export default App;
