import * as React from "react";
import * as ReactDOM from "react-dom";
import Sample from "./components/Sample";
import createProvider from "./createProvider";
import Home, { HomeProps } from "./components/Home";
import configureStore from "./store/configureStore";

const store = configureStore();
const Provider = createProvider<HomeProps>();

class App extends React.Component<any, any> {
  render() {
    return (
      <Provider store={store} target={Home} />
    );
  }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
