import Photo from '../assets/IMG20220714143728.jpg'

const Projects = () => {
  return (
    <section>
    <div className='container'>
      <div>
        <h2 className="text-[18px] leading-[30px] lg:text-[20px] lg:leading-9 text-headingColor font-[700]
            mt-5 lg:mt-8 mb-7">A coconut scrapper project</h2>
            <div className='flex  flex-col md:flex-row gap-6'>
        <img src={Photo}  className='w-[180px] h-[180px] rounded-md' alt=""/>
        <div>
          <p>
          During the internal attatchment which was immediately after 2nd year. I participated in a group which was working on a coconut
          scrapper machine.The machine was to be used to help scrapping off the hard part of the coconut hence making the work easier for those who
          had been using mbuzi.
          The small machine was made up of a motor,which was used to rotate the scrapper which we fabricated using steel.There was also a coconut holder,
          ply wood and glass to enable the user to see what is happening inside the machine.
          Used processes such as welding,grinding to make the metal parts.
          </p>
        </div>
        </div>
      </div>

      <div>
      <h2 className="text-[18px] leading-[30px] lg:text-[20px] lg:leading-9 text-headingColor font-[700]
            mt-5 lg:mt-8 mb-7">Polymer Compactor Machine</h2>
      <p>
        With the expertise of Mr Nyaga and my team ,we were able to successifully interpret the compactor design and create 
        a functional mechine based on that design. We take pride in our precise fabrication skills and are 
        confident that the machine will meet your expectations
      </p>
      </div>
    </div>
    </section>
  )
}

export default Projects