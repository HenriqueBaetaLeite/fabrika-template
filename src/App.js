import './App.css';
import Login from './pages/Login';
import ChartTest from './pages/ChartTest';
import { Switch, Route } from 'react-router-dom';
import Tests from './pages/Tests';

import 'antd/dist/antd.css';
// import 'antd/dist/antd.dark.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/chart" component={ChartTest} />
        <Route path="/tests" component={Tests} />
      </Switch>
    </div>
  );
};

export default App;
