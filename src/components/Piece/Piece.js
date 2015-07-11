import React, { PropTypes } from 'react';
import Color from 'color';
import styles from './Piece.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Piece {
  static propTypes = {
    color: PropTypes.string.isRequired,
    left: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  };

  getData(dataUrl) {
    return dataUrl.replace('data:image/png;base64,', '');
  }

  getDots(type, color, darkerColor, height, left, right) {
    if (type === 'flat') {
      return null;
    }

    let studDiameter = 24;
    let dots = [];
    let offset = (47 / 2) - (studDiameter / 2);
    for(let l = 0; l < left; ++l) {
      for (let r = 0; r < right; ++r) {
        // darker base pile
        for (let a = 0; a < 3; ++a) {
          let baseStyle = {
            backgroundColor: darkerColor,
            width: studDiameter,
            height: studDiameter,
            transform: `translateZ(${a * 3}px)`,
            WebkitTransform: `translateZ(${a * 3}px)`,
            borderRadius: '50%',
            top: l * 47 + offset,
            left: r * 47 + offset
          };
          dots.push(<div style={baseStyle} />);
        }

        // lighter top
        let topStyle = {
          backgroundColor: color,
          border: `1px solid ${darkerColor}`,
          width: studDiameter,
          height: studDiameter,
          transform: `translateZ(10px)`,
          WebkitTransform: `translateZ(10px)`,
          borderRadius: '50%',
          top: l * 47 + offset,
          left: r * 47 + offset
        };
        dots.push(<div style={topStyle} />);
      }
    }
    return dots;
  }

  render() {
    let color = this.props.color;
    let darkerColor = Color(color).darken(0.3).hexString();

    if (Color(color).hexString() === '#000000') {
      darkerColor = '#333333';
    }

    let left = this.props.left * 47;
    let right = this.props.right * 47;
    let height = this.props.type === 'brick' ? 45 : 15;
    let scale = 0.7;

    return (
      <div className="piece-container" style={{width: (right + left) * scale, height: (height + Math.sin(.78) * left) * scale}}>
        <div style={{width: right, height: height, position: 'relative', perspective: 1200, WebkitPerspective: 1200}}>
          <div className="piece" style={{
            transform: `scale(${scale}) translateX(${left / 2}px) translateY(${Math.sin(.30) * left}px) rotateX(-25deg) rotateY(45deg)`,
            WebkitTransform: `scale(${scale}) translateX(${left / 2}px) translateY(${Math.sin(.30) * left}px) rotateX(-25deg) rotateY(45deg)`
          }}>
            <div className="right" style={{backgroundColor: darkerColor, width: right, height: height,
              transform: `translateZ(${left / 2}px)`,
              WebkitTransform: `translateZ(${left / 2}px)`
            }} />
            <div className="left" style={{backgroundColor: darkerColor, width: left, height: height, left: (right / 2) - (left / 2),
              transform: `rotateY(-90deg) translateZ(${right / 2}px)`,
              WebkitTransform: `rotateY(-90deg) translateZ(${right / 2}px)`
            }} />
            <div className="top" style={{
              transformStyle: 'preserve-3d',
              WebkitTransformStyle: 'preserve-3d',
              backgroundColor: color, width: right, height: left, top: (height / 2 - (left / 2)),
              transform: `rotateX(90deg) translateZ(${height / 2}px)`,
              WebkitTransform: `rotateX(90deg) translateZ(${height / 2}px)`
            }}>
              {this.getDots(this.props.type, color, darkerColor, height, this.props.left, this.props.right)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Piece;
