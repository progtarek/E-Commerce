import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";

// Lazy Pages
const Home = React.lazy(() =>
  import(/* webpackPrefetch: true  */ "./pages/Home.page")
);
const ManageProduct = React.lazy(() =>
  import(/* webpackPrefetch: true  */ "./pages/ManageProduct.page")
);

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/add" element={<ManageProduct />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
