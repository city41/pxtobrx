import React, { PropTypes } from 'react';
import styles from './PieceMap.less';
import withStyles from '../../decorators/withStyles';

const DISCLAIMER = 'This map is rendered using the chosen Lego brick colors, so may look different from the image';

@withStyles(styles)
class PieceMap extends React.Component {
  static propTypes = {
    pieces: PropTypes.array.isRequired,
    scale: PropTypes.number.isRequired,
    userScale: PropTypes.number.isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired
  };

  componentDidMount() {
    this.drawImage();
  }

  componentDidUpdate() {
    this.drawImage();
  }

  drawImage() {
    let s = this.props.scale;
    let us = this.props.userScale;

    if (this.state.fitToWindow) {
      s = (window.innerWidth * .9) / (this.props.imgWidth * us);
    }

    let canvas = React.findDOMNode(this.refs.pieceMapCanvas);
    canvas.width = this.props.imgWidth * s * us;
    canvas.height = this.props.imgHeight * s * us;
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'pink';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.props.pieces.forEach((p) => {
      ctx.fillStyle = p.value.color;
      // pieces don't get multiplied by userScale
      // because they already have it factored in from the algorithm
      let x = p.x * s;
      let y = p.y * s;
      let w = p.width * s;
      let h = p.height * s;

      if (this.state.hideBorders) {
        ctx.fillRect(x, y, w, h);
      } else {
        ctx.fillRect(x + 1, y + 1, w - 2, h - 2);
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {showDisclaimer: true};
  }

  render() {
    let disclaimer = this.state.showDisclaimer ?
      <div className="disclaimer">{DISCLAIMER} <a onClick={() => this.setState({showDisclaimer: false})}>got it</a></div>
      : null;
    return (
      <div className="PieceMap">
        {disclaimer}
        <div>
          <input type="checkbox" onClick={() => this.setState({fitToWindow: !this.state.fitToWindow})} /> Fit to window
          &nbsp;
          <input type="checkbox" onClick={() => this.setState({hideBorders: !this.state.hideBorders})} /> Hide brick borders
        </div>
        <canvas ref="pieceMapCanvas" />
      </div>
    );
  }

}

export default PieceMap;
