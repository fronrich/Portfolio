import React from "react";

// import router
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import routes
import { Landing, Sound, Visuals } from "./routes/Routes";
import PATH from "./database/links.json";

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
          path={PATH.home}
          exact
          render={(props) => <Landing routeLocation={"root"} {...props} />}
        />
        <Route
          path={PATH.sound}
          exact
          render={(props) => <Sound routeLocation={"sound"} {...props} />}
        />
        <Route
          path={PATH.visuals}
          exact
          render={(props) => <Visuals routeLocation={"visuals"} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
