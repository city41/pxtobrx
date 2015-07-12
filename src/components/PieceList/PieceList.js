import _ from 'lodash';
import Color from 'color';
import React, { PropTypes } from 'react';
import styles from './PieceList.less';
import withStyles from '../../decorators/withStyles';
import BrickColors from '../../constants/BrickColors';

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

  toggleBagged(color, size) {
    let state = {};
    let key = `${color}${size}`;
    state[key] = !this.state[key];
    this.setState(state);
  }

  render() {
    let colorGroups = _.groupBy(this.props.pieces, (p) => {
      return p.value.officialName;
    });

    colorGroups = _.pairs(colorGroups);
    colorGroups = _.sortBy(colorGroups, (cg) => {
      return cg[0];
    });

    colorGroups = _.map(colorGroups, (cg) => {
      let sizeGroups = _.countBy(cg[1], (p) => {
        return `${Math.min(p.width, p.height)}x${Math.max(p.width, p.height)}`;
      });
      sizeGroups = _.pairs(sizeGroups);
      sizeGroups = _.sortBy(sizeGroups, '0');

      return [cg[0], sizeGroups];
    });

    // [    ['black', ['1x1', 4], ['1x2', 6]],  [...]  ]
    let rows = _.flatten(_.map(colorGroups, (cg) => {
      return _.map(cg[1], (sizeAndQuantity, i) => {
        let headerTd;
        if (i === 0) {
          let legoColor = BrickColors[cg[0]].color;
          let isDark = Color(legoColor).dark();
          let className = isDark ? 'simple-color-dark' : 'simple-color-light';
          headerTd = <td rowSpan={cg[1].length} className={className} style={{backgroundColor: legoColor}}>{cg[0]}</td>;
        }

        let isBagged = this.state[`${cg[1]}${sizeAndQuantity[0]}`];

        return (
          <tr className={headerTd && 'header-row'} key={`${cg[0]}-${sizeAndQuantity.join('-')}`}>
            {headerTd}
            <td className={isBagged && 'bagged'}>{sizeAndQuantity[0]}</td>
            <td className={isBagged && 'bagged'}>{sizeAndQuantity[1]}</td>
            <td className={isBagged && 'bagged'}><input type="checkbox" onClick={this.toggleBagged.bind(this, cg[1], sizeAndQuantity[0])}></input></td>
          </tr>
        );
      });
    }));

    return (
      <div className="piece-list-container">
        <table>
          <thead>
            <tr>
              <th>Color</th><th>size</th><th>quantity</th><th>bagged</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PieceList;
