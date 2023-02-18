function Resume() {
  return (
    <>
    <h2>~View/Download My 1st Quarter 2023 Resume~</h2>
      <embed src='MuruchResume.pdf' type='application/pdf' id='resume' className='navbarbtn' />
      <br />
      <a href='MuruchResume.pdf' download='MuruchResume.pdf' id="downloadbtn" className='navbarbtn'>
        <button id='resume-btn'>Download Resume</button>
      </a>
      <h2 id='references'>Feel Free to Request References!</h2>
    </>
  )
}

export default Resume