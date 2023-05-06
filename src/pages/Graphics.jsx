import GraphicsList from '../components/GraphicsList'
import graphics from '../data/graphics'

function Graphics() {
  return (
    
    <>
    <h1>Examples of Recent Graphics Commissions and Projects:</h1>
    <div id='grexamples'>
      <GraphicsList graphics={graphics} />
    </div>
      <h2>For further information about contracts, freelance projects, examples, or any other inquiries, <a href='/contact'>click here for ways to contact me</a></h2>
    </>
  )
}

export default Graphics