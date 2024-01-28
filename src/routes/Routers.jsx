import About from "../Pages/About";
import {Routes,Route} from 'react-router-dom';
import Resume from "../Pages/Resume";
import Contact from "../Pages/Contact";
import Projects from "../Pages/Projects";

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
    </Routes>
  )
}

export default Routers




