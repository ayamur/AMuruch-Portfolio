import ProjectPreview from "./ProjectPreview/ProjectPreview"

const ProjectsList = (props) => {
  console.log('PROPS IN THE ProjectsList', props)
  return (
    <>
    <h3>PROJECTS LIST</h3>
      {/* <h1>{props.title}</h1>
      <>
        <ul>
          {props.ProjectPreview.map((props) =>
            <li key={props.idx}>
            </li>
          )}
        </ul>
      </> */}
    </>
  )
}

export default ProjectsList