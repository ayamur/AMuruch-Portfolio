function Contact() {
  return (
    <>
      <h1>Feel Free to Contact Me:</h1>
      <div class='contact-all'>
        <div class='contact-git'>
          <a href='https://github.com/ayamur'>
            <img src='github-mark-white.png' id="githublogo" className='contacticons' alt='github logo' />
            Contact Me on GitHub!
          </a>
        </div>
        <div class='contact-linked'>
          <a href='https://www.linkedin.com/in/ayalamuruch/'>
            <img src='linkedinwhite.png' id="linkedinlogo" className='contacticons' alt='linkedin logo' />
            Contact Me through LinkedIn!
          </a>
        </div>
        <div class='contact-mail'>
          <a href='mailto:ayalamuruch@gmail.com'>
            <img src='mailwhite.png' id="mailicon" className='contacticons' alt='mail icon' />
            Contact Me via E-Mail!
          </a>
        </div>
        <a href='#' class='up' alt='jellyfish and arrow'>
          <img src='/jelly_up.png' alt='jellyfish with up arrow' class='jellyarrow' />
        </a>
      </div>
    </>
  )
}

export default Contact