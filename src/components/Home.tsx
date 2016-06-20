import * as React from "react";
import { connect } from "react-redux";
import Sample from "./Sample";

import { bindActionCreators } from "redux";
import * as ImageActions from "../actions/images";

interface StateProps {
  hello: string
}
interface DispatchProps {
  transformFromUrl(url)
}

type Props = StateProps & DispatchProps;

export function mapStateToProps(state) {
  return {
    hello: "why hello there"
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImageActions, dispatch)
}

@connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component<Props, any> {
  render() {
    const { transformFromUrl, hello } = this.props;

    return (
      <div>
        <Sample src="img/samples/megaman.png" onClick={transformFromUrl} />
        <div>{hello}</div>
      </div>
    );
  }
}
