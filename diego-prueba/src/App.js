import Weather from './pages/Weather';
import Favorites from './pages/Favorites';
import notFound from './pages/notFound';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
 <Router>
            <Navbar className="" expand="lg">
              <Navbar.Brand className="p-4">
                <img src="/images/logo.png" alt="log" className="img-fluid" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="mt-4">
                <Nav className="mr-auto">
                  <Link to="/">Weather</Link>
                  <Link to="/Favorites">Favorites</Link>
                </Nav>
                <div className="col-3 d-none d-lg-block">
                  <div className="d-flex justify-content-center align-items-center">
                    
                    <span className="">Mis datos</span>
                  </div>
                </div>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route exact path="/" component={Weather} />
              <Route exact path="/Favorites" component={Favorites} />
              <Route component={notFound} />
            </Switch>
          </Router>
    </div>
  );
}

export default App;
