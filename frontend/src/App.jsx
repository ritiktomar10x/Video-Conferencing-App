
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from './pages/landing.jsx';
import Authentication from './pages/authentication.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import FormContext from "./contexts/FormContext.jsx";
import VideoMeetComponent from './pages/Video.jsx';
import Home from './pages/home.jsx';
import History from './pages/History.jsx';


function App() {

  return (
    <div className='App'>
      <Router>
        <AuthProvider>
        <FormContext>
          <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/auth' element={<Authentication/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/history' element={<History/>}></Route>
            <Route path='/:url' element={<VideoMeetComponent/>}></Route>
          </Routes>
        </FormContext>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
