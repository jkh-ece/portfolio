import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import json from './json/main.json';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState} from 'react';


function App() {
  const [activeBtn, setActiveBtn] = useState("home");

  const btnColorChanger = (value) => {
    setActiveBtn(value);
  }

  const downloadCVHandler =() => {
    const path = json.links.CVPath
    window.open(path);
  }

  return (
    <div className="portfolio">
      <Router>
        <div className="portfolio-topbar">
          <div className="topbar-logo">
            <p title='Download CV' onClick={()=>{downloadCVHandler()}}>JKH</p>
          </div>
          <div className="topbar-nav">
            <Link to='/'>
              <button title='Home' className={`nav-btn ${activeBtn === "home" && "active"}`} value="home" onClick={e => btnColorChanger(e.target.value)} />
            </Link>
            <Link to='/about'>
              <button title='About me' className={`nav-btn ${activeBtn === "about" && "active"}`} value="about" onClick={e => btnColorChanger(e.target.value)} />
              </Link>
            <Link to='/contact'>
              <button title='Contact me' className={`nav-btn ${activeBtn === "contact" && "active"}`} value="contact" onClick={e => btnColorChanger(e.target.value)} />
              </Link>
          </div>
        </div>

          <Routes>
            <Route exact path='/' element={<Home data={json.home} />} />
            {/* <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} /> */}
            <Route exact path='*' element={<div className='notFound'><p>404</p></div>} />
          </Routes>

        <div className="portfolio-footer">
          <p>
            The information presented in this portfolio is up-to-date as of {json.status.updated}.
          </p>
        </div>
      </Router>
    </div>
  );
}

export default App;
