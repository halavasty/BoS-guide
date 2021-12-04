import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { Navigation } from '../Navigation';
import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Ants } from '../../pages/Ants';
import './App.scss';

const cnApp = cn('App');

export const App: React.FC = () => {
  return (
    <div className={cnApp()} style={{ backgroundImage: 'url(/body.jpg)' }}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/ants" component={Ants} />
          <Route component={Home} />
          {/* <Route component={Notfound} /> */}
        </Switch>
      </Router>
    </div>
  );
};
