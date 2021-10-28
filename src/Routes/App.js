import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";


const App = () => (
   <BrowserRouter>
      <Layout>
         <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={NotFound} /> */}
         </Switch>
      </Layout>
   </BrowserRouter>
);

export default App;