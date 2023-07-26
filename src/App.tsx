import React, {useEffect} from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import {About} from './Components/About/About';
import {Contact} from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Team from './Components/Team/Team'
function App() {
  useEffect(()=>{
    document.title = 'Meggie'
  })
  return (
    <>
    <Router>
    <div className='miAppDiv'>
    <Navbar name=' Home ' name2= ' About us'  name3= ' Contact ' name4= 'Team'/> 
    </div>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/about`} 
              element={<About 
              title={'Ruby Rose'}
              url={'https://en.wikipedia.org/wiki/Ruby_Rose'}
              image={'https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2018/08/07/ruby_rose.jpg'}
              />}/>
      <Route path={`${process.env.PUBLIC_URL}/contact`} 
              element={<Contact 
              title={'Contact Us'}
              subtitle={'meggieTheBest@gmail.com'}
              url={'https://myaccount.google.com/'}
              image={'https://wearetribu.com/wp-content/uploads/2016/12/140115_minimalist.jpg'}
              rightArrow={true}
              />}/>
            <Route path={`${process.env.PUBLIC_URL}/team`} 
              element={<Team
              />}/>
    </Routes>
    </Router>
    { <Footer />}

    </>
  );
}

export default App;
