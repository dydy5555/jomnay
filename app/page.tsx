
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

import { Metadata } from "next";
import Dashboard from "./components/Dashboard";

// export const metadata: Metadata = {
//   title: "JomNay",
// };

export default function Page() {
  return (
    <pre>
      <Dashboard />
    </pre>
  );
}
