import ProjectsList from '../components/ProjectsList'
import projects from '../data/projects'

const Projects = () => {
  return (
    <>
      <ProjectsList projects={projects} />
    </>
  )
}

export default Projects