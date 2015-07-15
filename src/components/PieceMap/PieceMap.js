import React, { PropTypes } from 'react';
import styles from './PieceMap.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class PieceMap extends React.Component {
  static propTypes = {
    pieces: PropTypes.array.isRequired,
    scale: PropTypes.number.isRequired,
    userScale: PropTypes.number.isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      fitToWindow: true
    };
  }

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
      s = (window.innerWidth - 40) / (this.props.imgWidth * us);
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

  render() {
    return (
      <div className="piece-map">
        <div className="piece-map-options">
          <div className={`toggle-button ${this.state.fitToWindow && 'toggled-on'}`} onClick={() => this.setState({fitToWindow: !this.state.fitToWindow})}>
            {this.state.fitToWindow && '✓'} fit to window
          </div>
          <div className={`toggle-button ${this.state.hideBorders && 'toggled-on'}`} onClick={() => this.setState({hideBorders: !this.state.hideBorders})}>
            {this.state.hideBorders && '✓'} hide brick borders
          </div>
        </div>
        <canvas ref="pieceMapCanvas" />
      </div>
    );
  }

}

export default PieceMap;
