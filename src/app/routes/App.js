import { Switch, Route } from 'react-router-dom';
import { Landing } from '../pages/Landing';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
