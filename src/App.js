import { Provider } from "react-redux";

import Header from "./Header";
import Body from "./Body";
import Panel from "./Panel";
import store from "./store";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="grid grid-flow-col grid-cols-12">
        <Panel />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
