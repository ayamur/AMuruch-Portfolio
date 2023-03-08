function Contact() {

  return (

    <>
      <h1>Feel Free to Contact Me:</h1>
      <div className='contact-all'>
        <div className='contact-git'>
          <a href='https://github.com/ayamur' className='resume-icon'>
            <img src='github-mark-white.png' id="githublogo" className='contacticons' alt='github logo' />
            Contact Me on GitHub!
          </a>
        </div>
        <div className='contact-linked'>
          <a href='https://www.linkedin.com/in/ayalamuruch/' className='resume-icon'>
            <img src='linkedinwhite.png' id="linkedinlogo" className='contacticons' alt='linkedin logo' />
            Contact Me through LinkedIn!
          </a>
        </div>
        <div className='contact-mail'>
          <a href='mailto:ayalamuruch@gmail.com' className='resume-icon'>
            <img src='mailwhite.png' id="mailicon" className='contacticons' alt='mail icon' />
            Contact Me via E-Mail!
          </a>
        </div>
      </div>
      <a href='#top' className='up' alt='jellyfish and arrow'>
        <img src='/jelly_up.png' alt='jellyfish with up arrow' className='jellyarrow' />
      </a>
    </>

  )

}

export default Contact