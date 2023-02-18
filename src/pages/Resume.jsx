function Resume() {
  return (
    <>
      <embed src='MuruchResume.pdf' type='application/pdf' id='resume' className='navbarbtn' />
      <br />
      <a href='MuruchResume.pdf' download='MuruchResume.pdf' id="downloadbtn" className='navbarbtn'>
        <button>Download Resume</button>
      <h1>Feel Free to Request References!</h1>
      </a>
    </>
  )
}

export default Resume