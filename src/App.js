import Retrieve from './Retrieve';
import Pokemon from './Pokemon';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path='/' component={Retrieve} />
        <Route exact path='/:pokemon' component={Pokemon} />
      </Router>


    </div>
  );
}

export default App;
