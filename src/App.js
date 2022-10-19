import React from "react";
import Accordian from "./accordian/Accordian";
import AccordionItem from "./accordion/AccordionItem";
import "./App.css";
import CollapseExpand from "./collaseexpand/CollapseExpand";
import ListExample from "./ListExample";

function App() {
  return (
    <div>
      <ListExample />
      <Accordian />
      <AccordionItem />
      <CollapseExpand />
    </div>
  );
}

export default App;
