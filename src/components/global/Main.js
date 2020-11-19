import React from "react";
import { Switch, Route } from "react-router-dom";

import BlogListPage from "../specific/BlogListPage";
import Cycle from "../Cycle";

function Main() {
  return (
    <main className="Main">

      <Switch>
        <Route exact path="/">
          <Cycle />
        </Route>
        <Route path="/blog">
          <BlogListPage />
        </Route>
      </Switch>

    </main>
  );
}

export default Main;
