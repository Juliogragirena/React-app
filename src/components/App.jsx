import React from "react";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Error404 from "../components/Error404";
import BadgeEdit from "../pages/BadgeEdit";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:badgeId/" component={BadgeDetailsContainer} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route component={Error404} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
