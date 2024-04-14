import './App.css';
import MainRoutes from './MainRoutes/MainRoutes';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

function App() {

  

  return (
    <div className='h-[100vh] overflow-hidden'>
      <Navbar />

       <SideBar />
      <MainRoutes />
    
     
    </>
      <SideBar />
      <ProblemDescription descriptionText={markdownText}></ProblemDescription>
    </div>

  );
}

export default App;
