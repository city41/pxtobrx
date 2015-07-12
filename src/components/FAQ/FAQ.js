import React from 'react';
import styles from './FAQ.less';
import withStyles from '../../decorators/withStyles';

import AppActions from '../../actions/AppActions';

@withStyles(styles)
class FAQ {
  render() {
    return (
      <div>
        <div onClick={AppActions.onToggleFaq} className="faq-mask"></div>
        <div className="faq">
          <div className="faq-close" onClick={AppActions.onToggleFaq}>X</div>
          <h2>pxtobrx v0.1</h2>
          <p>A Lego mosaic generator, targeted at video game sprites</p>
          <h3>Found a bug?</h3>
          <p>
            You can report it on <a href="https://github.com/city41/pxtobrx/issues">GitHub</a>&nbsp;
            or <a href="mailto:matt.e.greer@gmail.com">email me</a>
          </p>
          <h3>The mosaic looks crappy!</h3>
          <p>That is either a limitation of the bricks and colors Lego makes,
            the algorithm, or both. Some colors are only available in a tiny number of brick sizes.
            Sometimes the algorithm has to fall back and use a different color because of that. The algorithm
            is certainly not perfect, and will be improved over time.
          </p>
          <p>If a certain sprite looks <em>really</em> bad as a mosaic, please <a href="https://github.com/city41/pxtobrx/issues">file a bug</a> and include the sprite image in the bug report.</p>
          <div className="faq-footer">
            made by <a href="http://mattgreer.org">Matt Greer</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
