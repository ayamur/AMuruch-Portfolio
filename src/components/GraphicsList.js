import GraphicPreview from './GraphicPreview/GraphicPreview'

const GraphicsList = (props) => {

  return (

    <>
      <div class='project-list'>

        {props.graphics.map((project) =>
          <GraphicPreview key={project.name} description={project.description} image={project.image} />
        )}
      </div>
    </>

  )

}

export default GraphicsList