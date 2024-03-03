import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { DetailVideoProvider } from "../context/DetailVideoContext";
export default function Root() {
  return (
    <div>
      <DetailVideoProvider>
        <Header />
        <Outlet />
      </DetailVideoProvider>
    </div>
  );
}
