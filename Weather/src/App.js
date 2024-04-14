// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './HomePage/Homepage';
import Page from "./WeatherPage/WeatherPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/page" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;