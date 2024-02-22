import React, { useEffect, useState, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";
import "./App.css";
import "./media.css";
const Home = React.lazy(() => import("./pages/HomePage/Home"));
const Capabilities = React.lazy(() =>
  import("./components/Capabilities/Capabilities")
);
const Flavors = React.lazy(() => import("./components/Flavors/Flavors"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));
const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
const Certification = React.lazy(() =>
  import("./components/Capabilities/Certification")
);
const Production = React.lazy(() =>
  import("./components/Capabilities/Production")
);
const Design = React.lazy(() => import("./components/Capabilities/Design"));
const FlavorsList = React.lazy(() =>
  import("./components/Flavors/FlavorsList")
);

const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const AdminPage = React.lazy(() => import("./components/AdminPage/AdminPage"));

function App() {
  const location = useLocation();
  const [trackLocation, setTrackLocation] = useState(location);

  useEffect(() => {
    setTrackLocation(location);
  }, [location]);

  return (
    <Layout trackLocation={trackLocation}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/capabilities">
          <Route
            index
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Capabilities />
              </Suspense>
            }
          />
          <Route
            path="certification"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Certification />
              </Suspense>
            }
          />
          <Route
            path="production"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Production />
              </Suspense>
            }
          />
          <Route
            path="design"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Design />
              </Suspense>
            }
          />
        </Route>
        <Route path="/flavors">
          <Route
            index
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Flavors />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <FlavorsList />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <AdminPage />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
