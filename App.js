/**
 * 
 * HMR - Hot Module Reloading
 * File Watcher algorithm written in c++
 * bundling 
 * minifying
 * cleaning our code
 * dev and production builds
 * Super fast build algorithm
 * Image optimization
 * caching while development
 * 
 * 
 */
import React from "react";
import ReactDOM from "react-dom"; // Corrected import statement

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

// Use ReactDOM.render instead of ReactDOM.createRoot
ReactDOM.render(container, document.getElementById("root"));
