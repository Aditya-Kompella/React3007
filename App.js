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
const continer = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
//2:39:30
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing the react element into the root element
root.render(continer);
