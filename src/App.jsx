
import './App.css'
import './styles/GeneralInfo.css'
import GeneralInfo from './components/GeneralInfo';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';

function App() {
  return(
    <>
    <div className='App'>
      
      <GeneralInfo/>
      <EducationalExperience/>
      <PracticalExperience/>
    </div>
    </>
  );
}
  
export default App;
