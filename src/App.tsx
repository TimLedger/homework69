import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Show from './containers/Show/Show';
import NotFound from './containers/NotFound/NotFound';
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="page-body">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="shows/:id" element={<Show />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
