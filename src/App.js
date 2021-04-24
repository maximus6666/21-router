import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import HomePage from "./pages/HomePage.js";
import PostPage from "./pages/PostPage.js";
import GalleryPage from "./pages/GalleryPage.js";
import ContactsPage from "./pages/ContactsPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="nav-header">
            <NavLink className="nav-link" activeClassName="active-nav" to="/21-router">Home</NavLink>
            <NavLink className="nav-link" activeClassName="active-nav" to="/posts">Posts</NavLink>
            <NavLink className="nav-link" activeClassName="active-nav" to="/gallery">Gallery</NavLink>
            <NavLink className="nav-link" activeClassName="active-nav" to="/contacts">Contacts</NavLink>
        </header>
          <Switch>
            <Route exact path="/21-router">
              <HomePage/>
            </Route>
            <Route exact path="/posts">
              <PostPage/>
            </Route>
            <Route exact path="/gallery">
              <GalleryPage/>
            </Route>
            <Route exact path="/contacts">
              <ContactsPage/>
            </Route>
          </Switch>
        </Router>     

    </div>
  );
}

export default App;
