import ProjectPreview from './ProjectPreview/ProjectPreview'

const ProjectsList = (props) => {
  return (
    <>
      <ul>
        {props.projects.map((project) =>
          <ProjectPreview key={project.title} image={project.image} title={project.title} />
        )}
      </ul>
    </>
  )
}

export default ProjectsList