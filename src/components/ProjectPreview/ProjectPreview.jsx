import { Link } from 'react-router-dom'
import hyphenateWords from '../../utilities/hyphenateWords'

const ProjectPreview = (props) => {

  return (

    <div class='all-preview'>
      <div class='preview'>
        <>
          <img
            alt={props.title}
            src={props.image}
            class='image-details'
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