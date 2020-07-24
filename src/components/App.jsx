import React from "react";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

import Layout from "../components/Layout";
import Home from "../components/Home";
import Error404 from "../components/Error404";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={Error404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
