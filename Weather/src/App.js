// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import DoseListCardBody from "./HomePage/sample";
import Homepage from './HomePage/Homepage';
import Page from "./WeatherPage/WeatherPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/page" element={<Page />} />
        {/* <Route path="/sample" element={<DoseListCardBody />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;