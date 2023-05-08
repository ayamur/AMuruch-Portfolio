import { Link } from 'react-router-dom'
import GraphicsList from '../components/GraphicsList'
import graphics from '../data/graphics'

const Graphics = () => {

  return (

    <>
      <h1>Examples of Recent Graphics Commissions and Projects:</h1>
      <div>
        <GraphicsList graphics={graphics} />
      </div>
      <a href='#top' className='up' alt='jellyfish and arrow'>
        <img src='/jelly_up.png' alt='jellyfish with up arrow' className='jellyarrow' />
      </a>
      <h2>Current Software Skillset: Adobe Photoshop 5+, PaintTool SAI, FireAlpaca, Black Ink, Asperite, Blender, FaceRig, RPG Maker (MV, VX Ace, XP), Sprite Lamp, Spriter Pro, VRoid Studio, GIMP, Aartform Curvy 3D 3.0  </h2>
      <h3>For further information about contracts, freelance projects, examples, or any other inquiries, <Link to='/contact'>click here for ways to contact me.</Link></h3>
    </>
  )
}

export default Graphics