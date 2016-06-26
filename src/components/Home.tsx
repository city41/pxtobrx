import * as React from "react";
import { connect } from "react-redux";
import Sample from "./Sample";

import { bindActionCreators } from "redux";
import * as ImageActions from "../actions/images";
import { PlacedPieceDef } from "pxtobrxlib/dist/PieceDef";

interface StateProps {
  result: PlacedPieceDef[]
}
interface DispatchProps {
  transformFromUrl(url)
}

type Props = StateProps & DispatchProps;

export function mapStateToProps(state) {
  return {
    result: state.Images.result
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImageActions, dispatch)
}

@connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component<Props, any> {
  render() {
    const { transformFromUrl, result } = this.props;

    return (
      <div>
        <Sample src="img/samples/megaman.png" onClick={transformFromUrl} />
        <div><pre>{JSON.stringify(result, null, 2)}</pre></div>
      </div>
    );
  }
}
