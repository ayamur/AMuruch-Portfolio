import ProjectsList from '../components/ProjectsList'
import projects from '../data/projects'

const Projects = () => {
  return (
    <>
      <ProjectsList projects={projects} />
      <a href='#' class='up'>
        <img src='jelly_up.png' alt='jellyfish with up arrow' class='jellyarrow' />
      </a>
    </>
  )
}

export default Projects