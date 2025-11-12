import { Link } from "react-router";
import './styles/index.scss'
import './styles/languageTech.scss'

function LanguageTech () {
  return(
    <div className="languageTechPage">
      <Link to="/">go back</Link>
      <section className="textSection">
        <h1>ELT background</h1>
        <p>Before software development I worked for several years in the foreign language teaching industry. 
          I had several roles within International House Madrid including teacher, senior teacher and ADOS. As a software developer I 
          can work within any domain but given my background I especially enjoy working on language learning related applications.
        </p>
        <p>Additionally, because of my background in teaching languages I am well placed to understand the needs
          and wishes of teachers, students, and support staff within a language academy. 
        </p>
        <p>Some ideas if you don't already have some of your own...</p>
        <ul>
          <li>automate placement testing</li>
          <li>material creation based on syllabus & course materials</li>
          <li>student app to reinforce content from lessons</li>
        </ul>
      </section>
    </div>

  )
};

export default LanguageTech;