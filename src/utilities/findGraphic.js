import graphics from '../data/graphics'
import hyphenateWords from './hyphenateWords'

function findGraphic(string) {

  const graphic = graphics.find(graphic => {

    return hyphenateWords(graphic.name) === string

  })

  return graphic

}
export default findGraphic