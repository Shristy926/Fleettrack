import React, { lazy, Suspense, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { useLocation } from "react-router-dom";
import AlertsPage from "./components/pages/AlertsPage";
import TripsPage from "./components/pages/TripsPage";
import OverspeedList from "./components/Reports/OverspeedList";
import SettingsPage from "./components/pages/SettingsPage";

//import Loader from "./components/Shared/Loader";

const HomePage = lazy(() => import("./components/pages/DashboardPage"));
const vehicleTracking = lazy(() => import("./components/pages/VehicleTracking"));
//const Register = lazy(() => import("./components/Auth/SignUp"));

//const ErrorPage = lazy(() => import("./components/Shared/Error404"));

function useShouldShowLayout() {
  const location = useLocation();
  const pathsWithoutLayout = ["/Login"];
  return !pathsWithoutLayout.includes(location.pathname);
}

function App() {
  //const shouldShowLayout = useShouldShowLayout();
  // const getToken = useCallback(async () => {
  //   //const newToken = await fetchToken();
  //   //localStorage.setItem("token", newToken);
  // }, []);

  // if (!localStorage.getItem("token")) {
  //   window.location.reload();
  //   return <Audio
  // height="80"
  //   width = "80"
  //   radius = "9"
  //   color = "green"
  //   ariaLabel = "loading"
  //   wrapperStyle
  //   wrapperClass
  //     />
  // }

  const publicRoutes = (
    // <Suspense fallback= {< Loader />}>
    <Suspense>
    <Routes>

    <Route path= "/dashboard" Component = { HomePage } />
      <Route path="/" element = {< Navigate to = "/dashboard" replace />} />
        < Route path = "/VehicleTracking" Component = { vehicleTracking } />
        < Route path = "/triphistory" Component = { TripsPage } />
        <Route path="/alerts" Component = { AlertsPage } />
        <Route path="/settings" Component = { SettingsPage } />
        <Route path="/overspeedlist" Component = { OverspeedList } />
        </Routes>
    </Suspense>
  );
return (
  <>
  <Layout>{ publicRoutes } </Layout>
  </>
);
}

export default App;