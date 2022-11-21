import NavigationBar from './components/Nav'
import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element = {<NavigationBar/>} />
          {/* <Route path={`${process.env.PUBLIC_URL}/:id`} element = {<Welcome/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
