import { useParams } from 'react-router-dom'
import findProject from '../utilities/findProject'

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt='project preview' />
      <a href={project.repositoryLink}>
        <button>
          GitHub Repository
        </button>
      </a>
      <a href={project.deploymentLink}>
        <button>
          Try the App
        </button>
      </a>
    </>
  )
}

export default ProjectDetails