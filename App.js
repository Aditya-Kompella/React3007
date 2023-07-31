/**
 * parcel created a server
 * HMR - Hot Module Replacement
 * File Watcher algorithm written in c++
 * bundling
 * minifying
 * cleaning our code
 * dev and production builds
 * Super fast build algorithm
 * Image optimization
 * caching while development
 * compression
 * compatible with older versions of browsers
 * it adds polyfills for older browsers
 * gives  enability to work on https on dev
 * manages port number
 * we should put parcel.cache in our gitignore folder anything that we can generate on our server should kept in .gitignore
 * uses consistent hasing algorithm for caching
 * zero config bundler
 * transitive dependencies -- we have our package manager which handles the dependency tree and take care of transitive dependencies
 * browser list is a thing which is used to determine which browsers we support
 * tree shaking
 * means that we don't need to bundle all the dependencies
 * parcel uses the tree shaking algorithm and we don't need the bundles it removes itself
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
