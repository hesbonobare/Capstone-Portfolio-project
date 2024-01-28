
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Routers from '../routes/Routers'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <>
    <Header/>
    <main>
    <ToastContainer />
       <Routers/> 
    </main>
    <Footer/>
    </>
  )
}

export default Layout;