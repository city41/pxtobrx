import * as React from "react";
import { connect } from "react-redux";
import Sample from "./Sample";
import PieceMap from "./PieceMap";

import { bindActionCreators } from "redux";
import * as ImageActions from "../actions/images";
import { PlacedPieceDef } from "../brix/PieceDef";

interface StateProps {
  pieces: PlacedPieceDef[],
  width: number,
  height: number
}
interface DispatchProps {
  transformFromUrl(url: string)
}

export type HomeProps = StateProps & DispatchProps;

function mapStateToProps(state) {
  return {
    pieces: state.Images.pieces,
    width: state.Images.width,
    height: state.Images.height
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImageActions, dispatch)
}

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component<HomeProps, any> {
  render() {
    const {
      transformFromUrl,
      pieces = [],
      width,
      height
    } = this.props;

    return (
      <div>
        <Sample src="img/samples/megaman.png" onSelect={transformFromUrl} />
        <Sample src="img/samples/goomba.png" onSelect={transformFromUrl} />
        <PieceMap pieces={pieces} imgWidth={width} imgHeight={height} scale={20} userScale={1} />
      </div>
    );
  }
}
