import {  BrowserRouter as Router, Switch , Route, Link} from "react-router-dom";
import Inicio from "./components/Inicio";
import Pokemon from "./components/Pokemon";


function App() {
  return (
    <Router>

        <div className="container">
        <nav class="navbar navbar-dark bg-dark">
            <Link to="/" className="btn btn-dark">
              Inicio
            </Link>
        </nav>
        
        <hr />

     <Switch>
       <Route path="/" exact>
          <Inicio />
       </Route>
       <Route path="/:number" exact>
          <Pokemon />
       </Route>
     </Switch>
     </div>
    </Router>
  );
}

export default App;
