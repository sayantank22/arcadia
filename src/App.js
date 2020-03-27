import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './pages/home';
import about from './pages/about';
import contact from './pages/contact';
import gallery from './pages/gallery';
import newsRoom from './pages/news-room';
import whyArcadia from './pages/why-arcadia';
import notFoundPage from './pages/404_page';
import Navbar from './components/Navbar';
import StickyFooter from './components/StickyFooter';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={home} />
          <Route path='/about' component={about} />
          <Route path='/why-arcadia' component={whyArcadia} />
          <Route path='/gallery' component={gallery} />
          <Route path='/news-room' component={newsRoom} />
          <Route path='/contact' component={contact} />
          <Route path='*' component={notFoundPage} />
        </Switch>
        <StickyFooter />
      </Router>
    </div>
  );
}

export default App;
