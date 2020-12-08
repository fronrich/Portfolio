import React from "react";

// import router
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import routes
import Landing from "./routes/Landing";
import Sound from "./routes/Sound";

// universal stylings
import "./css/App.css";
// component stylings
import "./css/components/containerTypes.css";
import "./css/components/headline.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => <Landing routeLocation={"root"} {...props} />}
        />
        <Route
          path="/sound"
          exact
          render={(props) => <Sound routeLocation={"sound"} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
