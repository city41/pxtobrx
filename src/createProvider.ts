import * as React from "react";
import { Store } from "redux";

export default function createProvider<TargetProps>() {
  interface ProviderProps<P> {
    store: Store,
    target: React.ComponentClass<P>
  }

  return class Provider extends React.Component<ProviderProps<TargetProps>, any> {
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
