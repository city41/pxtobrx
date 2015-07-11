import React, { PropTypes } from 'react';
import styles from './FullPieceListEntry.less';
import withStyles from '../../decorators/withStyles';

import Piece from '../Piece';

@withStyles(styles)
class FullPieceListEntry extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    l: PropTypes.number.isRequired,
    r: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    legoColor: PropTypes.shape({
      color: React.PropTypes.string
    })
  };

  render() {
    return (
      <div className="full-piece-list-entry">
        <span className="full-field full-count">{this.props.count}</span>
        <span className="full-field full-dimensions">{this.props.l}x{this.props.r}</span>
        <Piece type={this.props.type} color={this.props.legoColor.color} left={this.props.l} right={this.props.r} />
      </div>
    );
  }

}

export default FullPieceListEntry;
