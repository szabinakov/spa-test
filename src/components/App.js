import "../styles/App.css";
import { useState } from "react";
import Home from "./Home";
import Register from "./Register";
import { Route } from "react-router-dom";

function App() {
  const initialState = {
    user: {
      isUserLoggedIn: false,
    },
  };
  const [user, setUser] = useState(initialState.user);

  return (
    <div className="App">
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
        render={(props) => (
          <Register {...props} userState={user} setUserState={setUser} />
        )}
      />
    </div>
  );
}

export default App;
