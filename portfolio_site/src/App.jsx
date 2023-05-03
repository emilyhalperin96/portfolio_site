import Topbar from '/Users/emilyhalperin/Development/code/phase-5/portfolio_site/portfolio_site/src/components/Topbar.jsx'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio';
import Works from './components/Works';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import './app.scss'
import {useState} from 'react';
import Menu from './components/Menu';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
        </div>
    </div>
  );
}

export default App;
