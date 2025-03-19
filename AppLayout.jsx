import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import OngoingEvents from "./OngoingEvents";
import Admin from "./Components/Admin";
import Notification from "./Components/Notification";

const AppLayout = () => {
  const location = useLocation();

  if (location.pathname === "/preference") {
    return <Outlet />;  
  }


  return (
    <div>
      {location.pathname === "/" && (
        <>
        
          {/* <NavBar/>
          <Hero/>
          <OngoingEvents/> */}
          <Notification/>

        </>
      )}

      <Outlet />
    </div>
  );
};

export default AppLayout;
