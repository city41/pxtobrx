import * as React from "react";
import { Store } from "redux";

export default function createProvider<P>() {
  interface ProviderProps<P> {
    store: Store,
    target: React.ComponentClass<P>
  }

  return class Provider extends React.Component<ProviderProps<P>, any> {
    static childContextTypes = {
      store: React.PropTypes.object.isRequired
    }

    getChildContext() {
      return { store: this.props.store };
    }

    render() {
      return React.createElement(this.props.target);
    }
  };
}
