import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import {
  Products,
  Cart,
  Favorites,
  PageNotFound,
  SingleProduct
} from "./pages";
import { Layout } from "./components";
import { useFetch } from "./hooks";
import store from "./state";
import { ROUTES } from "../constants";

function onError() {
  return "Products stolen";
}

function onSuccess(payLoad) {
  store.dispatch({ type: "SET_PRODUCTS", payLoad });

  return payLoad;
}

function App() {
  const { loading: isLoading, error } = useFetch({
    onError,
    onSuccess,
    src: "https://boiling-reaches-93648.herokuapp.com/food-shop/products",
    initialState: [],
    dataKey: "products"
  });

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route
              path={ROUTES.defaultPage}
              exact
              render={() => <Products isLoading={isLoading} error={error} />}
            />
            <Route path={ROUTES.cart} exact component={Cart} />
            <Route path={ROUTES.favorites} exact component={Favorites} />
            <Route
              path={ROUTES.product} //nenutryniau
              exact
              render={props => (
                <SingleProduct {...props} isLoading={isLoading} />
              )}
            />
            <Redirect exact from={ROUTES.home} to={ROUTES.defaultPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
