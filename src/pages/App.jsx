import { NavLink } from 'react-router';
import ProcessCard from '../components/ProcessCard';
import Logo from '../assets/logo.svg';
import github from '../../public/github.svg';
import linkedin from '../../public/linkedinLogo.svg';
import parlanchin from '../../public/parlanchin.svg';
import { consultingProcessSteps } from '../consts';
import '../styles/index.scss'


function App() {
  return (
    <>
      <section className='heading'>
        <img src={Logo} alt="Logo" className='logo'/>
        <h1 aria-label="Matt Rueter">Matt Rueter</h1>
        <div className='grouping'>
          <h2>Software Developer</h2>
          <p>Madrid based - Eligible to work in Spain & U.S.</p>
        </div>
        <div className='socials'>
          <a href="https://github.com/MattRueter" target="_blank" rel="noopener noreferrer">
            <img src={github} alt='github logo' />
          </a>
          <a href="https://www.linkedin.com/in/robert-matthew-rueter/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt='linkedin logo' />
          </a>
          <a href="https://parlanchin.com/" target="_blank" rel="noopener noreferrer">
            <img src={parlanchin} alt='parlanchin logo' />
          </a>
        </div>
      </section>
      <section className='textSection'>
        <h2>What I do</h2>
        <p>
        I’m a full-stack developer who builds applications independently and in globally distributed teams, with a strong focus on mapping engineering to the product and user experience.
        </p>
        <p>    
        I’ve worked cross-functionally with technical and non-technical colleagues, and I’m currently developing tools for foreign language education — applying domain expertise through solid engineering practices.
        Based in Madrid, I’m looking for full-time and freelance opportunities.
        </p>
      </section>
      <section>
        <h2>Projects and experience</h2>        
        <h3>Personal Projects:</h3>
        <ul>
          <li>
            <NavLink to={`/projects/prompt-evaluation`}>AI Prompt Evaluation</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/zest`}>Zest</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/idiom`}>Idiom</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/palabrisa`}>Palabrisa</NavLink>
          </li>
          <li>
            <NavLink to={`/projects/plug`}>Plug</NavLink>
          </li>
        </ul>
        <h3 >As a member Agile teams:</h3>
        <ul>
          <li>Team Forward</li>
          <a href="https://www.tfnetworking.com/">vist site</a>
          <li>Chingu Dashboard</li>
          <a href="https://www.chingu.io/">read more about Chingu</a>
        </ul>
      </section>
      <section>
        <h2>Are you looking for a freelancer?</h2>
        <h2>Proposal process</h2>
        <div className='processCardContainer'>
          {consultingProcessSteps.map((step) =>(
              <ProcessCard
                key={step.id}
                title={step.title} 
                description={step.description} 
                bullets={step.bullets}
              />
          ))}
        </div>
      </section>
      <section className="ctaContainer">
        <div className='cta'>
          <p>Is your project related to language learning or teaching? I might be well placed to help you build something.</p>
          <NavLink to="/language-edtech" >Read about my background here.</NavLink>
        </div>
      </section>
      <section>
        <h2>
          Connect or contact me on <a href="https://www.linkedin.com/in/robert-matthew-rueter/">Linkedin</a>
          </h2>
      </section>
    </>
  )
}

export default App
