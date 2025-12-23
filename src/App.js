
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Donate from './components/pages/Donate';
import Contact from './components/pages/Contact';
import News from './components/pages/News';
import Mission from './components/pages/Mission';
import DiwaliDetails from './components/diwali/DiwaliDetails';
import DiwaliImages from './components/diwali/DiwaliImages';
import YogaDetails from './components/yoga/YogaDetails';
import YogaImages from './components/yoga/YogaImages';
import UpcomingEvent from './components/pages/UpcomingEvent';
import SPojaDetails from './components/saraswatiPuja/SPojaDetails';
import SPojaImages from './components/saraswatiPuja/SPojaImages';
import CampaingnsDetails from './components/campaingns/CampaingnsDetails';
import CampaingnsImages from './components/campaingns/CampaingnsImages';
import PicknicDetails from './components/piknic/PicnicDetails';
import PicknicImages from './components/piknic/PicknicImages';
import SummerDetails from './components/summer/SummerDetails';
import SummerImages from './components/summer/SummerImages';
import SpeechCompetionDetails from './components/SpeechCompetition/SpeechCompetitionDetails';
import SpeechCompetitionImage from './components/SpeechCompetition/SpeechCompetitionImage';
import MissionPeakImage from './components/MissionPeak/MissionPeakImage';
import MissionPeakDetails from './components/MissionPeak/MissionPeakDetails';
import WildFireDetails from './components/WildFire/WildFireDetails';
import WildFireImage from './components/WildFire/WildFireImage';
import SacredDetails from './components/Sacred/SacredDetails';
import SacredImage from './components/Sacred/SacredImage';
import CelebritiesDetails from './components/Celebrities/CelebritiesDetils';
import CelebritiesImages from './components/Celebrities/CelebritiesImages';
import DiwaliDetails24 from './components/diwali24/DiwaliDetails24';
import DiwaliImages24 from './components/diwali24/DiwaliImages24';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/contact us' element={<Contact/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/our mission' element={<Mission/>}/>
        <Route path='/spujaDetails' element={<SPojaDetails/>}/>
        <Route path='/spujaImages' element={<SPojaImages/>}/>
        <Route path='/campaingnsDetails' element={<CampaingnsDetails/>}/>
        <Route path='/campaingnsImages' element={<CampaingnsImages/>}/>
        <Route path='/summercampDetails' element={<SummerDetails/>}/>
        <Route path='/summercampImages' element={<SummerImages/>}/>
        <Route path='/picknicDetails' element={<PicknicDetails/>}/>
        <Route path='/picknicImages' element={<PicknicImages/>}/>
        <Route path='/diwaliDetails' element={<DiwaliDetails/>}/>
        <Route path='/diwaliImages' element={<DiwaliImages/>}/>
        <Route path='/yogaDetails' element={<YogaDetails/>}/>
        <Route path='/yogaImages' element={<YogaImages/>}/>
        <Route path='/SpeechCompetitionDetails' element={<SpeechCompetionDetails/>}/>
        <Route path='/SpeechCompetitionImage' element={<SpeechCompetitionImage/>}/>
        <Route path='/MissionPeakDetails' element={<MissionPeakDetails/>}/>
        <Route path='/MissionPeakImage' element={<MissionPeakImage/>}/>
        <Route path='/WildFireDetails' element={<WildFireDetails/>}/>
        <Route path='/WildFireImage' element={<WildFireImage/>}/>
        <Route path='/SacredDetails' element={<SacredDetails/>}/>
        <Route path='/SacredImage' element={<SacredImage/>}/>
        <Route path='/CelebritiesDetails' element={<CelebritiesDetails/>}/>
        <Route path='/CelebritiesImages' element={<CelebritiesImages/>}/>
         <Route path='/DiwaliDetails24' element={<DiwaliDetails24/>}/>
         <Route path='/DiwaliImages24' element={<DiwaliImages24/>}/>
        <Route path='/upcoming' element={<UpcomingEvent/>}/>
        <Route path='/contact_page' element={<Contact/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
