import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div id="sig">
          <button type='button' id='sigbtn'>
        <Link to='/'>
          <img src='signature.png' id='signature' alt='ayala signature icon' />
      </Link>
          </button>
      </div>
      <ul>
      <Link to='/about'>
        <button type='button' id='aboutbtn' className='navbarbtn' >
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
    </nav >
  )
}

export default NavBar