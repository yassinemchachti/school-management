import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function Layout() {
    return (
      <>
        <NavBar />
        <main className="container mx-auto px-4">
          <Outlet />
        </main>
      </>
    );
}

export default Layout;
