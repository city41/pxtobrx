import * as React from "react";
import { connect } from "react-redux";
import Sample from "./Sample";
import PieceMap from "./PieceMap";

import { bindActionCreators } from "redux";
import * as ImageActions from "../actions/images";
import { PlacedPieceDef } from "../brix/PieceDef";

interface StateProps {
  result: PlacedPieceDef[],
  width: number,
  height: number
}
interface DispatchProps {
  transformFromUrl(url: string)
}

type Props = StateProps & DispatchProps;

function mapStateToProps(state) {
  return {
    result: state.Images.result,
    width: state.Images.width,
    height: state.Images.height
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImageActions, dispatch)
}

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component<Props, any> {
  render() {
    const {
      transformFromUrl,
      result = [],
      width,
      height
    } = this.props;

    return (
      <div>
        <Sample src="img/samples/megaman.png" onClick={transformFromUrl} />
        <Sample src="img/samples/goomba.png" onClick={transformFromUrl} />
        <PieceMap pieces={result} imgWidth={width} imgHeight={height} scale={20} userScale={1} />
      </div>
    );
  }
}
