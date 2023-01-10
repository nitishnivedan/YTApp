import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Panel from "./Panel";
import store from "./store";
import logo from "./logo.svg";
import Videos from "./VideoList/VideoContainer";
import "./App.css";

const config = [
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/watch",
    element: <Videos />,
  },
];

const router = createBrowserRouter(config);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="grid grid-flow-col grid-cols-12">
        <Panel />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
