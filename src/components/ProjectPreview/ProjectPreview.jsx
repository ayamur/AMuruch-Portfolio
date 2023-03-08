import { Link } from 'react-router-dom'
import hyphenateWords from '../../utilities/hyphenateWords'

const ProjectPreview = (props) => {

  return (

    <div className='all-preview'>
      <div className='preview'>
        <>
          <img
            alt={props.title}
            src={props.image}
            className='image-details'
          />
          <section>
            <h3>
              {props.title}
            </h3>
            <Link to={hyphenateWords(props.title)}>
              <button>
                More Info
              </button>
            </Link>
          </section>
        </>
      </div>
    </div>

  )

}

export default ProjectPreview