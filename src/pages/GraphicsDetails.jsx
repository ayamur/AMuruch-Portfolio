import { useParams } from 'react-router-dom'
import findGraphic from '../data/graphics'

const GraphicDetails = () => {

  const { graphicDetails } = useParams()
  const graphic = findGraphic(graphicDetails)

  return (

    <>
      <div className='all-detail'>
        <div className='details'>
          <img src={graphic.image} alt='graphics preview' className='image-details' />
          <p className='details-title-desc'>{graphic.description}</p>
          <div className='btn-details-div'>
            <a href={graphic.image}>
              <button className='btn-details'>
                Full Image
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

export default GraphicDetails