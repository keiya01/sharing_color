import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ColorTopScreen from "./ColorTopScreen";

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/"  component={ColorTopScreen}/>
      </Switch>
    </Router>
  )
}

export default AppRoute; 