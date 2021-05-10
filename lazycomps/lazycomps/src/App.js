import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import MyPage from "./MyPage";

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

export default function App() {
  const [MyComponent, setMyComponent] = useState(() => () => null);

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

    </div>
  )
}
