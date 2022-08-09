import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import ApexLegends from "pages/ApexLegends";
import LOL from "pages/LOL";
import NotFound from "pages/404";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/apex" />,
    },
    {
      path: "/apex",
      element: <ApexLegends />,
    },
    {
      path: "/lol",
      element: <LOL />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
}
