import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to='/'>
          <button type='button' id='homebtn' className='navbarbtn'>
            logo img/signature here ---
            Ayala Murúch
          </button>
        </Link>
        <Link to='/about'>
          <button type='button' id='aboutbtn' className='navbarbtn'>
            About
          </button>
        </Link>
        <Link to='/contact'>
          <button type='button' id='contactbtn' className='navbarbtn'>
            Contact
          </button>
        </Link>
        <Link to='/projects'>
          <button type='button' id='projectsbtn' className='navbarbtn'>
            Projects
          </button>
        </Link>
        <Link to='/resume'>
          <button type='button' id='resumebtn' className='navbarbtn'>
            Resume
          </button>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar