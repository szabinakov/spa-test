import "../styles/App.css";
import { useState } from "react";
import Home from "./Home";
import Register from "./Register";
import Navbar from "./Navbar.js";
import AddUsers from "./AddUsers.js";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  const initialState = {
    user: {
      isUserLoggedIn: false,
    },
  };
  const [user, setUser] = useState(initialState.user);

  return (
    <div className="App">
      <Navbar userState={user} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home {...props} userState={user} setUserState={setUser} />
          )}
        />
        <Route
          exact
          path="/register"
          render={(props) => <Register {...props} setUserState={setUser} />}
        />
        <Route
          exact
          path="/add-users"
          render={() =>
            user.isUserLoggedIn ? <AddUsers /> : <Redirect to="/" />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
