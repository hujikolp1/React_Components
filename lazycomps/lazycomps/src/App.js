import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Suspense, lazy, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import MyPage from "./MyPage";
import OtherPage from "./OtherPage"; 

const First = lazy(() =>
  Promise.all([
    import("./First"),
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  ]).then(([m]) => m)
);

const Second = lazy(() =>
  Promise.all([
    import("./Second"),
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 3000);
    })
  ]).then(([m]) => m)
);

const FirstLazy = lazy(() => import("./FirstLazy"));
const SecondLazy = lazy(() => import("./SecondLazy"));

function ShowComponent({ name }) {
  switch (name) {
    case "first":
      return <First />;
    case "second":
      return <Second />;
    default:
      return null;
  }
}

export default function App() {
  const [MyComponent, setMyComponent] = useState(() => () => null);
  const [component, setComponent] = useState("");

  useEffect(() => {
    import("./FirstComponent").then(module => {
      setMyComponent(() => module.default);
    });
  }, []);

  const FirstComponent = lazy(() => import("./FirstComponent"));

  return (
    <div>
      <Suspense fallback={"loading..."}>
        <FirstComponent />
      </Suspense>

      <Suspense fallback={"loading..."}>
        <MyPage />
      </Suspense>

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
            <Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
              <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
            </Suspense>
          </section>
        </section>
      </Router>

      <Suspense fallback={<FadeLoader color={"lightblue"} size={150} />}>
        <OtherPage />
      </Suspense>

      <Fragment>
        <label>
          Load Component:{" "}
          <select value={component} onChange={e => setComponent(e.target.value)}>
            <option value="">None</option>
            <option value="first">FirstLazy</option>
            <option value="second">SecondLazy</option>
          </select>
        </label>
        <Suspense fallback="loading...">
          <ShowComponent name={component} />
        </Suspense>
      </Fragment>

    </div>
  )
}
