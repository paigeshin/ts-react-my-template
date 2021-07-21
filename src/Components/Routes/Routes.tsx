import React from "react";
import history from "../../Util/History";
import { Router, Route, Switch } from "react-router-dom";
import Landing from "../Pages/Landing";

const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        {/* <Route path="/" exact component={StreamList} /> */}
        {/* <Route path="/streams/new" exact component={StreamCreate} /> */}
        {/* <Route path="/streams/edit/:id" exact component={StreamEdit} /> */}
        {/* <Route path="/streams/delete/:id" exact component={StreamDelete} /> */}
        {/* <Route path="/streams/:id" exact component={StreamShow} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
