
import {Link} from 'react-router-dom';
import {RiLinkedinFill} from 'react-icons/ri';
import { AiFillYoutube,AiFillGithub, AiOutlineWhatsApp,AiOutlineMail,AiOutlineInstagram } from 'react-icons/ai';


const socialLinks=[
 
  {
    path:"https://wa.link/889oph",
    icon:< AiOutlineWhatsApp className='group-hover:text-white w-4 h-5'/>,
  },
  {
    path:"https://www.instagram.com/hesbonprojects/",
    icon:<AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>,
  }
   
 
  
];


const quickLinks01 = [
  
  {
    path:"/",
    display:"About me",
  },
  {
    path:"/projects",
    display:"Projects",
  },
  {
    path:"/resume",
    display:"Resume",
  },
  {
    path:"/contact",
    display:"Contact"
  }
]


function Footer() {

  const year = new Date().getFullYear()
  return <footer className='pb-16 pt-10'>
    <div className="container">
      <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
        <div>
          
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
            Copyright @ {year} developed by Hesbon Obare all rights reserved.</p>

          <div className='flex items-center gap-3 mt-4'>
            {
              socialLinks.map((link,index)=>(
                <Link 
                to={link.path} 
                key={index}
                className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center
                group hover:bg-primaryColor hover:border-none'
                >
                {link.icon}
                </Link>
              ))
            }
          </div>
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Quick Links
          </h2>

          <ul>
            {quickLinks01.map((item,index)=>(
              <li key={index} className='mb-4'>
                <Link 
                to={item.path}
                className='text-[16px] leading-7 font-[400] text-textColor'
                >
                  {item.display}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
            Contact
          </h2>
          <p className='text-textColor mb-3'><span className='text-headingColor'>Phone:</span>0745622718</p>
          <p className='text-textColor'><span className='text-headingColor'>Email:</span>hesbonobt@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer