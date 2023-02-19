import { useParams } from 'react-router-dom'
import findProject from '../utilities/findProject'

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)
  return (
    <>
      <div class='all-detail'>
        <div class='details'>
          <h1 class='details-title-desc'>{project.title}</h1>
          <p class='details-title-desc'>{project.description}</p>
          <img src={project.image} alt='project preview' class='image-details' />
        </div>
        <div class='btn-details-div'>
          <a href={project.deploymentLink}>
            <button class='btn-details'>
              Try the App!
            </button>
          </a>
          <a href={project.repositoryLink}>
            <button class='btn-details'>
              GitHub Link!
            </button>
          </a>
        </div>
      </div>
      <a href='#' class='up'>
        <img src='jelly_up.png' alt='jellyfish with up arrow' class='jellyarrow' />
      </a>
    </>
  )
}

export default ProjectDetails