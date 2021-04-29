import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import First from "./Components/First";
import Second from "./Components/Second";

function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <nav>
            <p>
              <Link to="first">First</Link>
            </p>
            <p>
              <Link to="second">Second</Link>
            </p>
          </nav>
          <section>
            <Route path="/first" component={First} />
            <Route path="/second" component={Second} />
          </section>
        </section>
      </Router>
    </div>
  );
}

export default App;
