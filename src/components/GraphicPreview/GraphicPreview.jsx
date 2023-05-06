const GraphicPreview = (props) => {

  return (

    <div className='all-preview'>
      <div className='preview'>
        <>
        <a href={props.image}>
          <img
            alt={props.description}
            src={props.image}
            className='image-details'
          />
          </a>
          <section>
            <h3>
              {props.description}
            </h3>
          </section>
        </>
      </div>
    </div>

  )

}

export default GraphicPreview