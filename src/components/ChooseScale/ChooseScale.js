import React, { PropTypes } from 'react';
import styles from './ChooseScale.less';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';

const scales = [1, 2, 3, 4];

@withStyles(styles)
class ChooseScale {
  static propTypes = {
    chosenScale: PropTypes.number.isRequired,
    choosable: PropTypes.bool.isRequired
  };

  render() {
    let scaleButtons = scales.map((s) => {
      let onClick = AppActions.onScale.bind(AppActions, s);
      return (
        <div key={s} onClick={onClick} className={this.props.chosenScale === s ? 'scale-container focused' : 'scale-container'}>
          <div className="scale-title">{s}x</div>
        </div>
      );
    });

    let className = 'choose-scale';

    if (this.props.choosable) {
      className += ' choosable';
    }

    return (
      <div className={className}>
        {scaleButtons}
        <div style={{clear: 'both'}} />
      </div>
    );
  }

}

export default ChooseScale;
