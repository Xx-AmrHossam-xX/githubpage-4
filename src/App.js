import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

export default function App (){
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);

  useEffect(() => {
    setX(window.innerWidth);
    setY(window.innerHeight);
  }, []);
  return (
    <div>
      <h2>{x}</h2>
      <h2>{y}</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home (){
  return <h2>Home</h2>;
}

function About (){
  return <h2>About</h2>;
}

function Users (){
  return <h2>Users</h2>;
}
