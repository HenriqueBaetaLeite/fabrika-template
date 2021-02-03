import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const RegisterPJ = React.lazy(() => import('./views/pages/register/RegisterPJ'));
const RegisterOperator = React.lazy(() => import('./views/pages/register/RegisterOperator'));
const RegisterDocs = React.lazy(() => import('./views/pages/register/RegisterDocs'));
const RegisterFinished = React.lazy(() => import('./views/pages/register/RegisterFinished'));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const App = () => (
  <HashRouter>
    <React.Suspense fallback={loading}>
      <Switch>
        <Route
          exact
          path="/login"
          name="Login Page"
          render={(props) => <Login {...props} />}
        />
        <Route
          exact
          path="/register"
          name="Register Page"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/registerpj"
          name="Register PJ Page"
          render={(props) => <RegisterPJ {...props} />}
        />
        <Route
          exact
          path="/registeroperator"
          name="Register Operator Page"
          render={(props) => <RegisterOperator {...props} />}
        />
        <Route
          exact
          path="/registerdocs"
          name="Register Documents"
          render={(props) => <RegisterDocs {...props} />}
        />
        <Route
          exact
          path="/registerfinished"
          name="Register Finished"
          render={(props) => <RegisterFinished {...props} />}
        />
        <Route
          exact
          path="/404"
          name="Page 404"
          render={(props) => <Page404 {...props} />}
        />
        <Route
          exact
          path="/500"
          name="Page 500"
          render={(props) => <Page500 {...props} />}
        />
        <Route
          path="/"
          name="Home"
          render={(props) => <TheLayout {...props} />}
        />
      </Switch>
    </React.Suspense>
  </HashRouter>
);

export default App;
