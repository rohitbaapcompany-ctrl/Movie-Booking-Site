import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer'
import Home from './Page/Home/Home';  
import Movies from './Page/Movies/Movies';
import Releases from './Page/Releases/Releases';
import Login from './Page/Login/Login';
import ViewAll from './Components/ViewAll';
import Theater from './Page/Theater/Theater';
import BookingPage from './Components/BookingPage';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className=""> {/* padding for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/viewall" element={<ViewAll />} />
            {/* <Route path="/releases" element={<Releases />} /> */}
            <Route path='/theater' element={<Theater />} />
            <Route path="/login" element={<Login />} />
            <Route path='/BookingPage' element={<> <BookingPage /> </>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
