function Contact() {

  return (

    <>
      <h1>Feel Free to Contact Me:</h1>
      <div class='contact-all'>
        <div class='contact-git'>
          <a href='https://github.com/ayamur' className='resume-icon'>
            <img src='github-mark-white.png' id="githublogo" className='contacticons' alt='github logo' />
            Contact Me on GitHub!
          </a>
        </div>
        <div class='contact-linked'>
          <a href='https://www.linkedin.com/in/ayalamuruch/' className='resume-icon'>
            <img src='linkedinwhite.png' id="linkedinlogo" className='contacticons' alt='linkedin logo' />
            Contact Me through LinkedIn!
          </a>
        </div>
        <div class='contact-mail'>
          <a href='mailto:ayalamuruch@gmail.com' className='resume-icon'>
            <img src='mailwhite.png' id="mailicon" className='contacticons' alt='mail icon' />
            Contact Me via E-Mail!
          </a>
        </div>
      </div>
      <a href='#top' class='up' alt='jellyfish and arrow'>
        <img src='/jelly_up.png' alt='jellyfish with up arrow' class='jellyarrow' />
      </a>
    </>

  )

}

export default Contact