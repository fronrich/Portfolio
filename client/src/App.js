import React from 'react';

// import router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// import routes
import Landing from "./routes/Landing";

// universal stylings
import './css/App.css';
// component stylings
import './css/components/social.css';
import './css/components/menu.css';
import './css/components/general.css';
import './css/components/headline.css'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Landing routeLocation={"root"} {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
