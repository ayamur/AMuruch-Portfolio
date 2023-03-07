function Home() {

  return (

    <>
      <div class='home-all'>
        <div class='home'>
          <h6 id='hellos'>| Hello | hallo | ሀሎ | مرحبا  |Բարեւ | Salam | kaixo | добры дзень | হ্যালো | zdravo | Здравейте | Hola | kumusta | 你好 | Bonghjornu | Ahoj | Hej | saluton | Tere | Hei | Bonjour | Hoi | ola | გამარჯობა | Χαίρετε | નમસ્તે | bonjou | sannu | aloha | שלום | 	नमस्ते | nyob zoo | Helló | Halló | Nnọọ | Halo | Dia dhuit | Ciao | こんにちは | halo | ಹಲೋ | សួស្តី | Slav | салам | ສະບາຍດີ | 	Salve | Sveiki | Здраво | Salama | ഹലോ | tena koutou | नमस्कार | Сайн уу | ဟယ်လို | Moni | سلام | dzień dobry | Olá | Salut | Здравствуйте | talofa | Halò | Lumela | mhoro | හෙලෝ | Ahoj | Hallå | Kamusta | Салом | வணக்கம் | హలో | สวัสดี | Merhaba | Здрастуйте | ہیلو | Salom | Helo | Mholweni | העלא | Pẹlẹ o | Sawubona | Bongu |ਸਤ ਸ੍ਰੀ ਅਕਾਲ | xin chào | Сәлеметсіз бе | 여보세요 | Përshëndetje |</h6>
          <h4 className='homedivide'><em>My name is:</em></h4>
          <div className='homeone'>
          <h1> Ayala <img src='/itsame.jpg' id='itsame' alt='my face' /> Murúch </h1>
          </div>
          <h4 className='homedivide'><em>and I am a :</em></h4>
            <h2>Software Engineer Passionate about Learning, Uplifting Others, and Everything Paranormal, with Professional Experience in Design, Non-Profits, and Game Testing!</h2>
          <h4 className='homedivide'><em>with skills in:</em></h4>
          <div className='waphome'>
            <h3>Frameworks/Libraries:</h3>
            <h6> npm, <div id='jquery'><img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JQuery.svg' alt='jQuery icon' className='listicons' />(jQuery) </div> <div id='react'><img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg' alt='React icon' className='listicons'/>(React)</div></h6></div>
          <div>
            <h3>Languages:</h3><h6>
              <div id='javascript' >
                <img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/JavaScript.svg' alt='JavaScript icon' className='listicons'/>
                (JavaScript)
              </div> HTML, CSS
              <div id='typescript' >
                <img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/TypeScript.svg' alt='TypeScript icon' className='listicons'/>
                (TypeScript)
              </div>EJS</h6>
          </div>
          <h3>Web Application Stacks: MERN, PERN</h3>
          <h3>Database/ Backend:</h3><h6>
            <div id='postgresql' >
              <img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/PostgreSQL-Dark.svg' alt='PostgreSQL icon' className='listicons'/>
              (PostgreSQL)
            </div>
            <div id='mondodb' >
              <img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/MongoDB.svg' alt='mondoDB icon' className='listicons'/>
              (MongoDB)
            </div>
            <div id='expressjs'>
              <img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/ExpressJS-Dark.svg' alt='express.js icon' className='listicons'/>
              (Express.js)
            </div>
            <div icon='nodejs'>
              <img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/NodeJS-Dark.svg' alt='node.js icon' className='listicons'/>
              (Node.js)
            </div></h6>
          <h3>Software Development Platforms: GitHub, </h3>
          <h3>Additional:</h3><h6> RESTful Routing, APIs, Mongoose ODM, JSON, JWT, AJAX
            <div icon='sequelize'>
              <img src='https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Sequelize-Dark.svg' alt='Sequelize icon' className='listicons'/>
              (Sequelize)
            </div> SPA, MVC framework, bit.io, OAuth, VS Code, Postman </h6>
          <h4 className='homedivide'><em>and I am looking for:</em></h4>
          <div className='hometwo'>
            <h2>A Remote Junior Software or Web Development Position in an Educational and Creative Environment where my Ideas, Enthusiasm, and Excitability can make a Positive Difference!</h2>
            <h6>(...and proof of supernatural phenomena.) </h6>
          </div>
        </div>
      </div>
      <a href='#top' class='up' alt='jellyfish and arrow'>
        <img src='/jelly_up.png' alt='jellyfish with up arrow' class='jellyarrow' />
      </a>
    </>

  )

}

export default Home