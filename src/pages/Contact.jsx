function Contact() {
  return (
    <>
      <h1>Feel Free to Contact Me:</h1>

      <a href='https://github.com/ayamur'>
        <img src='github-mark-white.png' id="githublogo" className='contacticons' alt='github logo' />
        Contact Me on GitHub!
      </a>
      <a href='https://www.linkedin.com/in/ayalamuruch/'>
        <img src='linkedinwhite.png' id="linkedinlogo" className='contacticons' alt='linkedin logo' />
        Contact Me through LinkedIn!
      </a>
      <a href='mailto:ayalamuruch@gmail.com'>
        <img src='mailwhite.png' id="mailicon" className='contacticons' alt='mail icon' />
        Contact Me via E-Mail!
      </a>
      <a href='#' class='up'>
        <img src='jelly_up.png' alt='jellyfish with up arrow' class='jellyarrow' />
      </a>
    </>
  )
}

export default Contact