import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";

// Lazy Pages
const Home = React.lazy(() =>
  import(/* webpackPrefetch: true  */ "./pages/Home.page")
);

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
