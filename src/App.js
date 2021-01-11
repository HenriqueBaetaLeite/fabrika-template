import Login from './pages/Login';
import ChartTest from './pages/ChartTest';
import Tests from './pages/Tests';
import Options from './pages/Options';
import { Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';
// import 'antd/dist/antd.dark.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/tests" component={Tests} />
    <Route exact path="/chart" component={ChartTest} />
    <Route exact path="/options" component={Options} />
  </Switch>
);

export default App;
