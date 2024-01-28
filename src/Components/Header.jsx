import {useEffect,useRef} from 'react';
import {BiMenu} from 'react-icons/bi';
import { NavLink} from 'react-router-dom';

const Header = () => {

    const navLinks=[
        {
          path:'/',
          display:'ABOUT ME'
        },
        {
          path:'/resume',
          display:'RESUME'
        },
        {
          path:"/projects",
          display:"PROJECTS"
        },
        {
          path:'/contact',
          display:'CONTACT'
        },
      ]

      const headerRef=useRef(null);
const MenuRef=useRef(null);

const handleStickyHeader=()=>{
  window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
      headerRef.current.classList.add('sticky__header')
    }else{
      headerRef.current.classList.remove('sticky__header')
    }
  })
}

useEffect(
  ()=>{
    handleStickyHeader()

    return ()=> window.removeEventListener('scroll',handleStickyHeader)
  }
)

const toggleMenu=()=>MenuRef.current.classList.toggle('show__menu')

  return (
    <header className='header stickyy__header' ref={headerRef}>
  
       { /*</section><header className='header flex items-center' ref={headerRef}>*/}
             <div className='containerheader'>
             <div className='flex gap-6 justify-between items-center h-[90px] sm:h-[100px] bg-slate-400 py-8 px-[20px] sm:px-[50px]'>
        <div className=''>
            <h1  className=' text-[15px] sm:text-[20px] font-bold '>HESBON MOKUA</h1> 
        
        </div>
        
    
        <div className="navigation" ref={MenuRef} onClick={toggleMenu}>
          <ul className="menu flex md:items-center items-start gap-[1rem] pl-9 md:pl-0 md:gap-[2.7rem]">
            {navLinks.map((link,index)=><li key={index}>
              <NavLink to={link.path} className={navClass=>navClass.isActive
               ? 'text-primaryColor text-[16px] leading-7 font-[600]'
               : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
            
            }>
              {link.display}
              </NavLink>
            </li>)}
          </ul>
        </div>

        <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
            </div>
            </div>
            
            </header>
           
  )
}

export default Header