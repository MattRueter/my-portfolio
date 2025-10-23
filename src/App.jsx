import ProcessCard from './components/ProcessCard';
import Logo from './assets/logo.svg';
import { consultingProcessSteps } from './consts';
import './styles/index.scss'


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
      </section>
      <section className='textSection'>
        <h2>What I do</h2>
        <p>
          I’m a full-stack developer focused on turning ideas into useful, well-crafted web applications.
          I enjoy creating solutions that are intuitive, dependable, and built with care.
        </p>
        <p>    
        I’ve built production-ready web applications both independently and as part of remote Agile teams.
        I can handle the full process — from understanding your needs, through planning and design, to development, launch, and ongoing maintenance.        
        Based in Madrid and open to remote work.
        If you’re looking for a developer who can turn an idea into a smooth, user-friendly web experience, let’s chat.
        </p>
      </section>
      <section>
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
      <section>
        <h2>Projects and experience</h2>          
        <h3 >As a team member:</h3>
        <ul>
          <li>Team Forward</li>
          <a href="https://www.tfnetworking.com/">vist site</a>
          <li>Chingu Dashboard</li>
          <a href="https://www.chingu.io/">read more about Chingu</a>
        </ul>
        <h3>Personal Projects:</h3>
        <ul>
          <li>Parlanchín</li>
          <a href="https://blog.parlanchin.com/">read more</a>
          <li>Plug</li>
          <a href="https://plug.parlanchin.com/">visit site</a>
        </ul>  
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
