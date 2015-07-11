import React, { PropTypes } from 'react';
import styles from './ChoosePieceType.less';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';

import Piece from '../Piece';
import BrickColors from '../../constants/BrickColors';

const buttonDefs = [
  { type: 'plate', left: 4, right: 2, color: BrickColors.Green.color },
  { type: 'brick', left: 3, right: 1, color: BrickColors['Dark Orange'].color },
  { type: 'flat', left: 2, right: 2, color: BrickColors['Sand Blue'].color }
];

@withStyles(styles)
class ChoosePieceType {
  static propTypes = {
    choosable: PropTypes.bool.isRequired,
    chosenPieceType: PropTypes.string
  };

  render() {
    let typeButtons = buttonDefs.map((def) => {
      let onClick = this.props.choosable && AppActions.onPieceType.bind(AppActions, def.type);
      return (
        <div key={def.type} onClick={onClick} className={this.props.chosenPieceType === def.type ? 'piece-type-container focused' : 'piece-type-container'}>
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
