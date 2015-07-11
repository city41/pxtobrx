import _ from 'lodash';

export default class PieceDef {
  constructor(options) {
    _.assign(this, options);
  }

  get costRatio() {
    return this.cost / (this.width * this.height);
  }

  clone() {
    return new PieceDef({width: this.width, height: this.height, cost: this.cost});
  }
}
