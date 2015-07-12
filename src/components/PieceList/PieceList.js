import _ from 'lodash';
import React, { PropTypes } from 'react';
import styles from './PieceList.less';
import withStyles from '../../decorators/withStyles';
import BrickColors from '../../constants/BrickColors';

import SimplePieceListEntry from './SimplePieceListEntry.js';
import FullPieceListEntry from './FullPieceListEntry.js';

@withStyles(styles)
class PieceList extends React.Component {
  static propTypes = {
    pieces: PropTypes.array.isRequired,
    chosenPieceType: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {showPieces: false};
  }

  render() {
    let pieceGroups = _.countBy(this.props.pieces, (p) => {
      // using max/min so that rotated pieces get grouped into same group
      // this is a temporary solution for rotated pieces, see constants/PieceSets.js too
      return `${p.value.officialName}:${Math.max(p.width, p.height)}:${Math.min(p.width, p.height)}`;
    });

    pieceGroups = _.pairs(pieceGroups);

    pieceGroups = _.sortByAll(pieceGroups, (pg) => {
      return pg[0].split(':')[0];
    }, (pg) => {
      return Number(pg[0].split(':')[1]);
    }, (pg) => {
      return Number(pg[0].split(':')[2]);
    });

    return (
      <div className="piece-list-container">
        <div className="piece-list-header simple-piece-list-entry">
          <span className="simple-field">color</span>
          <span className="simple-field">size</span>
          <span className="simple-field">quantity</span>
        </div>
        <div className="piece-list-rows">
          <ul>
          {_.map(pieceGroups, (pg) => {
            let pieceSpecs = pg[0].split(':');
            let legoColor = BrickColors[pieceSpecs[0]];
            let entry;

            if (this.state.showPieces) {
              entry = <FullPieceListEntry type={this.props.chosenPieceType} count={pg[1]} l={pieceSpecs[1]} r={pieceSpecs[2]} legoColor={legoColor} />;
            } else {
              entry = <SimplePieceListEntry count={pg[1]} l={pieceSpecs[1]} r={pieceSpecs[2]} legoColor={legoColor} />;
            }
            return (
              <li>
                {entry}
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    );
  }

}

export default PieceList;
