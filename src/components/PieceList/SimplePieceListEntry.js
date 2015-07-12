import React, { PropTypes } from 'react';
import Color from 'color';
import styles from './SimplePieceListEntry.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class SimplePieceListEntry extends React.Component {
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
    let isDark = Color(this.props.legoColor.color).dark();

    let colorFieldClassName = `simple-field simple-color simple-color-${isDark ? 'dark' : 'light'}`;

    return (
      <div className="simple-piece-list-entry">
        <span className={colorFieldClassName} style={{backgroundColor: this.props.legoColor.color}}>{this.props.legoColor.officialName}</span>
        <span className="simple-field simple-dimensions narrower">{this.props.l}x{this.props.r}</span>
        <span className="simple-field simple-count">{this.props.count}</span>
      </div>
    );
  }

}

export default SimplePieceListEntry;
