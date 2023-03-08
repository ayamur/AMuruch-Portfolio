import { useParams } from 'react-router-dom'
import findProject from '../utilities/findProject'

const ProjectDetails = () => {

  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (

    <>
      <div className='all-detail'>
        <div className='details'>
          <h1 className='details-title-desc'>{project.title}</h1>
          <p className='details-title-desc'>{project.description}</p>
          <img src={project.image} alt='project preview' className='image-details' />
          <div className='btn-details-div'>
            <a href={project.deploymentLink}>
              <button className='btn-details'>
                Try the App!
              </button>
            </a>
            <a href={project.repositoryLink}>
              <button className='btn-details'>
                GitHub Link!
              </button>
            </a>
          </div>
        </div>
      </div>
      <a href='#top' className='up' alt='jellyfish and arrow'>
        <img src='/jelly_up.png' alt='jellyfish with up arrow' className='jellyarrow' />
      </a>
    </>

  )

}

export default ProjectDetails