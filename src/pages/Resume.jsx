function Resume() {
  return (
    <>
      <h1>1st Quarter 2023 Resume</h1>
      <embed src='MuruchResume.pdf' type='application/pdf' id='resume' className='navbarbtn' />
      <br />
      <a href='MuruchResume.pdf' download='MuruchResume.pdf' id="downloadbtn" className='navbarbtn'>
        <button id='resume-btn'>Download Resume</button>
      </a>
      <h2 id='references'>Feel Free to Request References!</h2>
      <a href='#' class='up'>
        <img src='jelly_up.png' alt='jellyfish with up arrow' class='jellyarrow' />
      </a>
    </>
  )
}

export default Resume