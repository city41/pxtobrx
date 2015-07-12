import _ from 'lodash';
import React from 'react';
import styles from './Availability.less';
import withStyles from '../../decorators/withStyles';
import BrickColors from '../../constants/BrickColors';

@withStyles(styles)
class Availability extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getSizesMemod = _.memoize(this.getSizes);
  }

  getSizes(type) {
    let allPieces = _.flatten(_.map(Object.values(BrickColors), (color) => {
      return color.availablePieces[type];
    }));

    let deDuped = _.uniq(allPieces, (piece) => {
      return `${Math.min(piece.width, piece.height)}x${Math.max(piece.width, piece.height)}`;
    });

    return _.map(deDuped, (piece) => {
      return `${Math.min(piece.width, piece.height)}x${Math.max(piece.width, piece.height)}`;
    }).sort();
  }

  getTotalNumberOfSizes(type) {
    return this.getSizesMemod(type).length;
  }

  hasSize(size, availablePieces) {
    return _.any(availablePieces, (piece) => {
      let pieceSize = `${Math.min(piece.width, piece.height)}x${Math.max(piece.width, piece.height)}`;
      return pieceSize === size;
    });
  }

  getSizeTds(color, type) {
    let allSizes = this.getSizesMemod(type);

    return _.map(allSizes, (size) => {
      if (this.hasSize(size, color.availablePieces[type])) {
        return <td style={{backgroundColor: color.color}}>&#8226;</td>;
      } else {
        return <td></td>;
      }
    });
  }

  getRowTds() {
    let colors = _.sortBy(Object.values(BrickColors), 'officialName');
    return _.map(colors, (color) => {
      return (
        <tr>
          <td>{color.officialName}</td>
          {this.getSizeTds(color, 'plate')}
          {this.getSizeTds(color, 'brick')}
          {this.getSizeTds(color, 'flat')}
        </tr>
      );
    });
  }

  getPieceHeaderThs(type) {
    let headerValues = this.getSizesMemod(type);

    return _.map(headerValues, (hv) => {
      return <th><div>{hv}</div></th>;
    });
  }

  render() {
    return (
      <div>
        <p>
          Not all color and size combos exist. This can affect the mosaic build. Be sure to try your image with flats, bricks and plates to find the best color combination.
        </p>
        <p>
          Here is a chart of what is available on  <a href="http://shop.lego.com/en-US/Pick-A-Brick-ByTheme">Pick a Brick</a>
        </p>
        <table className="availability-table">
          <thead>
            <tr>
              <th></th>
              <th colSpan={this.getTotalNumberOfSizes('plate')}>plates</th>
              <th colSpan={this.getTotalNumberOfSizes('brick')}>bricks</th>
              <th colSpan={this.getTotalNumberOfSizes('flat')}>flats</th>
            </tr>
            <tr>
              <th></th>
              {this.getPieceHeaderThs('plate')}
              {this.getPieceHeaderThs('brick')}
              {this.getPieceHeaderThs('flat')}
            </tr>
          </thead>
          <tbody>
            {this.getRowTds()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Availability;
