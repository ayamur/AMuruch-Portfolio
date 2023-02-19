import ProjectsList from '../components/ProjectsList'
import projects from '../data/projects'

const Projects = () => {

  return (

    <>
      <h1>Apps and Projects:</h1>
      <div>
        <ProjectsList projects={projects} />
      </div>
      <a href='#' class='up' alt='jellyfish and arrow'>
        <img src='/jelly_up.png' alt='jellyfish with up arrow' class='jellyarrow' />
      </a>
    </>

  )

}

export default Projects