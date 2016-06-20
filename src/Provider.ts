import * as React from "react";

export default class Provider extends React.Component<any, any> {
  store: any
  target: any

  static childContextTypes = {
    store: React.PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.store = props.store;
    this.target = props.target;
  }

  getChildContext() {
    return { store: this.store };
  }

  render() {
    return React.createElement(this.target);
  }
}
