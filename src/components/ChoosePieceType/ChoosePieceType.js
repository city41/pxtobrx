import React, { PropTypes } from 'react';
import styles from './ChoosePieceType.less';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';

import Piece from '../Piece';
import PieceColors from '../../brix/PieceColors';

const buttonDefs = [
  { type: 'plate', left: 2, right: 1, color: PieceColors['Dark Green'].color },
  { type: 'brick', left: 2, right: 1, color: PieceColors['Bright Orange'].color },
  { type: 'flat', left: 2, right: 1, color: PieceColors['Medium Blue'].color }
];

@withStyles(styles)
class ChoosePieceType {
  static propTypes = {
    choosable: PropTypes.bool.isRequired,
    chosenPieceType: PropTypes.string
  };

  render() {
    let typeButtons = buttonDefs.map((def) => {
      let rootClass = 'piece-type-container';
      if (this.props.choosable) {
        rootClass += ' choosable';
      }
      let onClick = this.props.choosable && AppActions.onPieceType.bind(AppActions, def.type);
      return (
        <div key={def.type} onClick={onClick} className={this.props.chosenPieceType === def.type ? `${rootClass} focused` : rootClass}>
          <Piece type={def.type} left={def.left} right={def.right} color={def.color} />
          <div className="piece-type-title">{def.type}s</div>
        </div>
      );
    });

    let className = 'choose-piece-type';

    if (this.props.choosable) {
      className += ' choosable';
    }

    return (
      <div className={className}>
        {typeButtons}
        <div style={{clear: 'both'}} />
      </div>
    );
  }

}

export default ChoosePieceType;
