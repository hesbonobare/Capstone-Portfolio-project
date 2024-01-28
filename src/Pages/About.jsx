import Photo from '../assets/pic.jpg';

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-center gap-10 flex-col  md:flex-row'>
      <div className=" flex flex-col items-center bg-slate-200 rounded-lg w-[100%] justify-center sm:w-[30%] shadow-md p-6 mx-auto">
      <figure className=' rounded-full cursor-pointer mb-4'>
                <img src={Photo} className='w-[120px] h-[120px]  rounded-full' alt=''/>
              </figure>
              <h3 className='font-semibold'>HESBON MOKUA</h3>
              
      </div>  
      <div className='sm:w-[70%] items-center justify-center'>
        <h1 className='text-headingColor font-semibold items-center'>About me</h1>
        <p>I am an industrious Bsc Mechanical Engineering undergraduate student at Dedan Kimathi U niversity of 
          Technology.During my studies i was attached at Kenya Power Limited Company where i gained hands on experience 
          in various aspects of Mechanical Engineering .I completed my High School Studies in 2019 from Maranda High School
          and attended St Don Bosco Primary Boys Boarding School. I am passionate about creating innovative solutions to complex
          Engineering problems.I have experience in designing,analyzing, and implementing components as well as 
          project management and teamwork skills.I am excited to showcase my portofolio and share my experiences with you.
           </p>
      </div>
      </div>
      </div>
    </section>
  )
}

export default About;