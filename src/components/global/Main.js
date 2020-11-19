import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BlogListPage from "../specific/BlogListPage";
import Cycle from "../Cycle";

function Main() {
  return (
    <main className="Main">
      <Router>
        <Switch>
          <Route exact path="/">
            <Cycle />
          </Route>
          <Route path="/blog">
            <BlogListPage />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default Main;
