import {  HashRouter as Router } from 'react-router-dom';
import {Navbar, Hero, About,Men , Experience, Tech, Works, Feedbacks, Contact, StarsCanvas} from './components';

const App = () => {

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Men />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  )
}

export default App
