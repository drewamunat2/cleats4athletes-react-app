import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Events from "./routes/Events";
import Team from "./routes/Team";
import ContactUs from "./routes/ContactUs";
import DonateNow from "./routes/DonateNow";
import News from "./routes/News";
import Test from "./routes/Test";
import Awards from "./routes/Awards";

export default function RouteComponent(){
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/testimonials" element={<Test />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donate" element={<DonateNow />} />
        </Routes>
    </Router>
  )
}
