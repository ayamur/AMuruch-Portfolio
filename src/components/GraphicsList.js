import GraphicPreview from './GraphicPreview/GraphicPreview'

const GraphicsList = (props) => {

  return (

    <>
      <div id='grexamples' className='artexamples'>

        {props.graphics.map((project) =>
          <GraphicPreview key={project.name} description={project.description} image={project.image} />
        )}
      </div>
    </>

  )

}

export default GraphicsList