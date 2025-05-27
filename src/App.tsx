import React, { lazy, Suspense, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { useLocation } from "react-router-dom";
import AlertsPage from "./pages/AlertsPage";
import TripsPage from "./pages/TripsPage";
import SettingPage from "./pages/SettingsPage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
// import DashboardPage from "./pages/DashboardPage";

//import Loader from "./components/Shared/Loader";

// const HomePage = lazy(() => import("./pages/DashboardPage"));
// const vehicleTracking = lazy(() => import("./pages/VehicleTracking"));
//const Register = lazy(() => import("./components/Auth/SignUp"));

//const ErrorPage = lazy(() => import("./components/Shared/Error404"));

function useShouldShowLayout() {
  const location = useLocation();
  const pathsWithoutLayout = ["/Login", "/Register"];
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
    // <Suspense>
    <Routes>

    <Route path= "/login" element={<LoginPage onLogin={function (): void {
        throw new Error("Function not implemented.");
      } } />}  />
    <Route path= "/dashboard" element={<DashboardPage />}  />
      </Routes>    
  );
  return (
    <>
    <Layout>{ publicRoutes } </Layout>
    </>
  );
}

export default App;