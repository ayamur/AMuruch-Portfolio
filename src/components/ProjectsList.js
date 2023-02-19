import ProjectPreview from './ProjectPreview/ProjectPreview'

const ProjectsList = (props) => {

  return (

    <>
      <div class='project-list'>

        {props.projects.map((project) =>
          <ProjectPreview key={project.title} title={project.title} image={project.image} />
        )}
      </div>
    </>

  )

}

export default ProjectsList