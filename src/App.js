import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Teams from './Components/Teams';

import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/Home.scss";
import "./Styles/Footer.scss";
import "./Styles/Contact.scss";
import "./Styles/mediaquery.scss";


function App() {
  return (
    
   <Router>
    <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/teams' element={<Teams/>}/>
     </Routes>
    <Footer/>
   </Router>
  );
}


export default App;
