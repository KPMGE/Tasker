import React from "react";
import { Home } from "./src/pages/Home";
import { Backgroud } from "./src/components/Backgroud";

export default function App() {
  return (
    <Backgroud>
      <Home />
    </Backgroud>
  );
}
