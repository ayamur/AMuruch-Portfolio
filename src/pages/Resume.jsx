// import MuruchResume.pdf from '../../public/MuruchResume.pdf';

function Resume() {
  return (
    <>
      <h1>Resume Page!</h1>
      <embed src='MuruchResume.pdf' type='application/pdf' id='resume' className='navbarbtn'/>
      <br />
        <a href='MuruchResume.pdf' download='MuruchResume.pdf' id="downloadbtn" className='navbarbtn'>
      <button>Download Resume</button>
    </a>
    </>
  )
}

export default Resume