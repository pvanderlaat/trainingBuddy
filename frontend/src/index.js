import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import History from "./views/History"
import Creator from "./views/Creator"
import Generator from "./views/Generator"
import Page from "./views/WorkoutPage"
import Selector from "./views/Selector"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/history" element={<History />} />
          <Route path="/creator" element={<Creator />} /> 
          <Route path='/workoutPage/:id' element={<Page />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/selectionPage/:ids" element={<Selector />} />
      </Routes>
  </Router>, document.getElementById('app'));
