import ProcessCard from './components/ProcessCard';
import Logo from './assets/logo.svg';
import { consultingProcessSteps } from './consts';
import './index.scss'


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
          I’m a software developer who helps bring ideas to life.
          I build modern web applications using technologies like React, TypeScript, and Node.js 
          — everything from interactive front-ends to full-stack solutions.
        </p>
        <p>    
          I’ve worked on production-ready apps in remote Agile teams and can handle the full development process: 
          from planning and design to development to launch and maintenance.
          Based in Madrid and open to remote work. 
          If you’re looking for a developer who can turn ideas into smooth, user-friendly web experiences, I’d love to chat.
        </p>
      </section>
      
      

      <section>
        <h2>Proposal process</h2>
        {consultingProcessSteps.map((step) =>(
            <ProcessCard
              key={step.id}
              title={step.title} 
              description={step.description} 
              bullets={step.bullets}
            />
        ))}
      </section>

      <section>
        <h2>Projects and experience</h2>
        <ul>
          <li>Team Forward</li>
          <li>Chingu Dashboard</li>
          <li>Parlanchín</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <a href="https://www.linkedin.com/in/robert-matthew-rueter/">Linkedin</a>
      </section>

    </>
  )
}

export default App
