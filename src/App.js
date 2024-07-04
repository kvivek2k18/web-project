
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Donate from './components/pages/Donate';
import Contact from './components/pages/Contact';
import News from './components/pages/News';
import Mission from './components/pages/Mission';
import Footer from './components/Footer';
import WeddingDetails from './components/saraswatiPuja/WeddingDetails';
import WeddingImages from './components/saraswatiPuja/WeddingImages';
import EngagementDetails from './components/campaingns/EngagementDetails';
import EngagementImages from './components/campaingns/EngagementImages';
import BabyshowersDetails from './components/summer/BabyshowersDetails';
import BabyshowersImages from './components/summer/BabyshowersImages';
import BirthdaysDetails from './components/piknic/BirthdaysDetails';
import BirthdaysImages from './components/piknic/BirthdaysImages';
import DiwaliDetails from './components/diwali/DiwaliDetails';
import DiwaliImages from './components/diwali/DiwaliImages';
import YogaDetails from './components/yoga/YogaDetails';
import YogaImages from './components/yoga/YogaImages';
import UpcomingEvent from './components/pages/UpcomingEvent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/contact us' element={<Contact/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/our mission' element={<Mission/>}/>
        <Route path='/weddingDetails' element={<WeddingDetails/>}/>
        <Route path='/weddingImages' element={<WeddingImages/>}/>
        <Route path='/engagementDetails' element={<EngagementDetails/>}/>
        <Route path='/engagementImages' element={<EngagementImages/>}/>
        <Route path='/babyshowersDetails' element={<BabyshowersDetails/>}/>
        <Route path='/babyshowersImages' element={<BabyshowersImages/>}/>
        <Route path='/birthdaysDetails' element={<BirthdaysDetails/>}/>
        <Route path='/birthdaysImages' element={<BirthdaysImages/>}/>
        <Route path='/diwaliDetails' element={<DiwaliDetails/>}/>
        <Route path='/diwaliImages' element={<DiwaliImages/>}/>
        <Route path='/yogaDetails' element={<YogaDetails/>}/>
        <Route path='/yogaImages' element={<YogaImages/>}/>
        <Route path='/upcoming' element={<UpcomingEvent/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
