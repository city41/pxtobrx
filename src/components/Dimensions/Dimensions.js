import React, { PropTypes } from 'react';
import styles from './Dimensions.less';
import withStyles from '../../decorators/withStyles';

const MM_CONV = 7.8;
const INCH_CONV = MM_CONV * 0.0393701;
const FEET_CONV = INCH_CONV / 12;

@withStyles(styles)
class Dimensions {
  static propTypes = {
    scale: PropTypes.number.isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired
  };

  render() {
    let w = this.props.imgWidth * this.props.scale;
    let h = this.props.imgHeight * this.props.scale;
    let mmW = w * MM_CONV;
    let mmH = h * MM_CONV;
    let inchW = w * INCH_CONV;
    let inchH = h * INCH_CONV;
    let feetW = w * FEET_CONV;
    let feetH = h * FEET_CONV;

    let mainDimension;
    let secondaryDimension;

    if (feetW > 1 || feetH > 1) {
      mainDimension = `${feetW.toFixed(2)}x${feetH.toFixed(2)}ft`;
      secondaryDimension = `${inchW.toFixed(2)}x${inchH.toFixed(2)}in`;
    } else {
      mainDimension = `${inchW.toFixed(2)}x${inchH.toFixed(2)}in`;
      secondaryDimension = `${feetW.toFixed(2)}x${feetH.toFixed(2)}ft`;
    }

    return (
      <div>
        <div className="dollars">
          {mainDimension}
        </div>
        <div>
          {secondaryDimension}
        </div>
        <div>
          {mmW.toFixed(0)}x{mmH.toFixed(0)}mm
        </div>
        <div>
          {w}x{h}px
        </div>
      </div>
    );
  }
}

export default Dimensions;
