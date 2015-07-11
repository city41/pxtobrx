/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './PermaLink.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class PermaLink {
  getData(dataUrl) {
    return dataUrl.replace('data:image/png;base64,', '');
  }

  render() {
    if (this.props.dataUrl) {
      let url = location.protocol + '//' + location.host + '/data/' + this.getData(this.props.dataUrl);

      return (
        <div className="PermaLink">
          <a href={url} target="_blank">permalink</a>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default PermaLink;
