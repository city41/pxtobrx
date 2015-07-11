import React, { PropTypes } from 'react';
import styles from './Price.less';
import withStyles from '../../decorators/withStyles';

function getPrice(pieces) {
  let price = pieces.reduce((priceAccum, piece) => {
    return priceAccum + piece.cost;
  }, 0);

  return (price / 100).toFixed(2);
}

@withStyles(styles)
class Price {
  static propTypes = {
    pieces: PropTypes.array.isRequired
  };

  render() {
    return (
      <div>
        <div className="dollars">${getPrice(this.props.pieces)}</div>
        <div>
          at <a href="http://shop.lego.com/en-US/Pick-A-Brick-ByTheme">Pick a Brick</a>
        </div>
      </div>
    );
  }

}

export default Price;
