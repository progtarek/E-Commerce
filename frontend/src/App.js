import React, { Suspense } from "react";
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
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>
        <Suspense fallback={<p className="text-xs text-center">Loading ...</p>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/add" element={<ManageProduct />} />
            <Route path="/edit/:id" element={<ManageProduct />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
