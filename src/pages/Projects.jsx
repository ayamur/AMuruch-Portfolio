import ProjectsList from '../components/ProjectsList'
import projects from '../data/projects'

const Projects = () => {

  return (

    <>
      <h1>Apps and Projects:</h1>
      <div>
        <ProjectsList projects={projects} />
      </div>
      <a href='#top' className='up' alt='jellyfish and arrow'>
        <img src='/jelly_up.png' alt='jellyfish with up arrow' className='jellyarrow' />
      </a>
    </>

  )

}

export default Projects