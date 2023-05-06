import { useParams } from 'react-router-dom'
import findGraphic from '../data/graphics'

const GraphicDetails = () => {

  const { graphicDetails } = useParams()
  const graphic = findGraphic(graphicDetails)

  return (

    <>
      <div className='all-graphics'>
        <div className='graphics'>
          <img src={graphic.image} alt='graphics preview' className='graphics-image' />
          <p className='graphics-desc'>{graphic.description}</p>
          <div className='btn-graphics-div'>
            <a href={graphic.link}>
              <button className='btn-full'>
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